from faker import Faker
import numpy as np
import pandas as pd

fake = Faker()

def generate_student_data(num_students=30):
    np.random.seed(42)
    
    # Generate realistic names (e.g., "John Smith", "Priya Patel")
    names = [fake.name() for _ in range(num_students)]
    
    genders = np.random.choice(["Male", "Female"], size=num_students)
    math = np.random.randint(50, 100, size=num_students)
    english = np.random.randint(50, 100, size=num_students)
    science = np.random.randint(50, 100, size=num_students)
    attendance = np.random.randint(60, 100, size=num_students)

    df = pd.DataFrame({
        "Name": names,  # Now uses realistic names
        "Gender": genders,
        "Math": math,
        "English": english,
        "Science": science,
        "Attendance": attendance
    })

    # Calculate metrics
    df["Average"] = df[["Math", "English", "Science"]].mean(axis=1).round(2)
    df["Max"] = df[["Math", "English", "Science"]].max(axis=1)
    df["Min"] = df[["Math", "English", "Science"]].min(axis=1)
    df["Std"] = df[["Math", "English", "Science"]].std(axis=1).round(2)

    return df