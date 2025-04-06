Student Data Generator and Web Application
Overview
This project is a web application that generates fake student data, calculates various metrics, and exposes the data through a set of APIs. The backend is built using Flask and Pandas, while the frontend is built using React and Axios to fetch and display the data.

The application generates realistic student data, including:

Names (generated using the Faker library)

Gender

Scores in Math, English, and Science

Attendance Percentage

The application also computes additional metrics such as the average, maximum, minimum, and standard deviation of the scores for each student.

Features:
Generate Fake Student Data: Generate a list of fake students with names, gender, scores, and attendance.

Calculate Metrics: Compute the average, maximum, minimum, and standard deviation for each student's scores.

Flask APIs: Expose multiple APIs to get summarized data, top performers, students with low attendance, and export the data to CSV.

Frontend Display: Use React to fetch data from Flask APIs and display it in an interactive web interface.

Export Data: Export all student data as a CSV file by clicking the export button in the UI.

Technologies Used:
Python: Core language for data generation and API backend.

NumPy: Used for generating random data and performing statistical calculations.

Pandas: Used for creating and managing the student data in a tabular format.

Faker: Python library used to generate realistic fake names for students.

Flask: Lightweight web framework used for creating REST APIs to expose the student data.

React: JavaScript library for building the frontend user interface.

Axios: Promise-based HTTP client for making API requests from the React frontend.

Features:
Generate Fake Student Data: Create a list of fake students with randomly generated names, gender, scores, and attendance.

Calculate Metrics: Calculate and display the average, maximum, minimum, and standard deviation of the student's Math, English, and Science scores.

Flask APIs: Provide several APIs to fetch summarized data (average, max, min, etc.), top performers, low attendance students, and export the data to CSV.

Export to CSV: Allows users to download all student data in CSV format by clicking the "Export" button in the frontend.

Project Setup:
Backend (Flask)
Install the required Python libraries: First, create a virtual environment and install the necessary dependencies:

bash
Copy
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install Flask pandas numpy faker flask-cors
Run the Flask server: Start the Flask server by running the following command:

bash
Copy
python app.py
The server will run on http://localhost:5000.

Frontend (React)
Create a React app: In a separate directory, create a new React app:

bash
Copy
npx create-react-app student-data-frontend
Install Axios: Inside the React project directory, install Axios to make HTTP requests:

bash
Copy
cd student-data-frontend
npm install axios
Run the React app: Start the React development server by running:

bash
Copy
npm start
The React frontend will be available at http://localhost:3000.

Running the Application
The Flask backend will serve APIs for the student data, which the React frontend will consume using Axios to display the data.

The backend includes APIs such as:

/api/summary: Provides the average, max, min, and standard deviation of student scores.

/api/top: Fetches the top performers (students with the highest scores).

/api/low-attendance: Fetches the students with attendance below 75%.

/api/export: Allows users to export all student data as a CSV file.

Exporting Student Data
In the frontend React app, users can click the "Export" button to download the student data as a CSV file.

The Export API (/api/export) is responsible for generating and sending the CSV file containing all the student data.

Example API Endpoints:
/api/summary: Summarized statistics (average, max, min, and std deviation).

/api/top: List of top-performing students.

/api/low-attendance: List of students with low attendance.

/api/export: Downloads all student data in CSV format.

Example Usage:
Once the Flask and React servers are running, the user interface will allow you to:

View summarized student data (e.g., average scores).

See the top performers based on scores.

Check for students with low attendance.

Export all student data to a CSV file by clicking the Export button.