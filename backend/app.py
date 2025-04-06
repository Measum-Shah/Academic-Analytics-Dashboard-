from flask import Flask, jsonify, send_file
from flask_cors import CORS
from data_utils import generate_student_data
import tempfile
import os
import atexit

app = Flask(__name__)
CORS(app)

# Global data for simplicity please correct the code of export csv  
df = generate_student_data()

# Temporary file to be used for cleanup after app exit
temp_file_to_clean = None

@app.route("/api/summary")
def summary():
    stats = {
        "avg": round(df["Average"].mean(), 2),
        "max": int(df["Average"].max()),
        "min": int(df["Average"].min()),
        "std": round(df["Average"].std(), 2)
    }
    return jsonify(stats)

@app.route("/api/top")
def top_performers():
    top = df.sort_values(by="Average", ascending=False).head(5)
    return jsonify(top[["Name", "Average"]].to_dict(orient="records"))

@app.route("/api/low-attendance")
def low_attendance():
    low = df[df["Attendance"] < 75]
    return jsonify(low[["Name", "Attendance"]].to_dict(orient="records"))

@app.route("/api/scholarship")
def scholarship():
    scholars = df[df["Average"] > 85]
    return jsonify(scholars[["Name", "Average"]].to_dict(orient="records"))

@app.route("/api/export")
def export_csv():
    global temp_file_to_clean
    try:
        # Export ALL student data (not just scholarship students)
        with tempfile.NamedTemporaryFile(delete=False, suffix=".csv") as tmp:
            # Writing CSV data to the temporary file
            df.to_csv(tmp.name, index=False)
            tmp.close()  # Close file so it's available for send_file
            temp_file_to_clean = tmp.name  # Save reference to delete after the request
            
            # Returning the file as an attachment
            return send_file(
                tmp.name,
                as_attachment=True,
                download_name="all_students.csv",
                mimetype="text/csv"
            )
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Register cleanup function when the app shuts down (ensures cleanup after response)
@atexit.register
def cleanup_temp_file():
    if temp_file_to_clean and os.path.exists(temp_file_to_clean):
        try:
            os.unlink(temp_file_to_clean)
            print(f"Temporary file {temp_file_to_clean} deleted successfully.")
        except Exception as e:
            print(f"Error deleting temporary file: {e}")

if __name__ == "__main__":
    app.run(debug=True)
