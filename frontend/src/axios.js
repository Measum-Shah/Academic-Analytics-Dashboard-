import axios from 'axios';

const API_URL = "http://127.0.0.1:5000/api"; // Flask backend URL

export const getSummary = async () => {
  try {
    const response = await axios.get(`${API_URL}/summary`);
    return response.data;
  } catch (error) {
    console.error('Error fetching summary:', error);
  }
};

export const getTopPerformers = async () => {
  try {
    const response = await axios.get(`${API_URL}/top`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top performers:', error);
  }
};

export const getLowAttendance = async () => {
  try {
    const response = await axios.get(`${API_URL}/low-attendance`);
    return response.data;
  } catch (error) {
    console.error('Error fetching low attendance:', error);
  }
};

export const getScholarshipStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/scholarship`);
    return response.data;
  } catch (error) {
    console.error('Error fetching scholarship students:', error);
  }
};

export const exportResults = async () => {
  try {
    const response = await axios.get(`${API_URL}/export`, {
      responseType: 'blob',  // To handle CSV file
    });
    const fileURL = window.URL.createObjectURL(new Blob([response.data]));
    const fileLink = document.createElement('a');
    fileLink.href = fileURL;
    fileLink.setAttribute('download', 'results.csv');
    document.body.appendChild(fileLink);
    fileLink.click();
  } catch (error) {
    console.error('Error exporting results:', error);
  }
};
