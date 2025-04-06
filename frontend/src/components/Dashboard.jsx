import React, { useEffect, useState } from 'react';
import { getSummary, getTopPerformers, getLowAttendance, getScholarshipStudents, exportResults } from '../axios';
import SummaryCards from './SummaryCards';
import TopPerformers from './TopPerformers';
import LowAttendance from './LowAttendance';
import ScholarshipList from './ScholarshipList';
import ExportButton from './ExportButton';

const Dashboard = () => {
  const [summary, setSummary] = useState({});
  const [topPerformers, setTopPerformers] = useState([]);
  const [lowAttendance, setLowAttendance] = useState([]);
  const [scholarshipStudents, setScholarshipStudents] = useState([]);

  useEffect(() => {
    // Fetch data when the component is mounted
    const fetchData = async () => {
      const summaryData = await getSummary();
      const topData = await getTopPerformers();
      const lowAttendanceData = await getLowAttendance();
      const scholarshipData = await getScholarshipStudents();

      setSummary(summaryData);
      setTopPerformers(topData);
      setLowAttendance(lowAttendanceData);
      setScholarshipStudents(scholarshipData);
      //  console.log(topData)
    };

    fetchData();
   
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Academic Analytics Dashboard</h1>
      
      <SummaryCards stats={summary} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TopPerformers data={topPerformers} />
        <LowAttendance data={lowAttendance} />
      </div>
      
      <ScholarshipList data={scholarshipStudents} />
      
      <ExportButton onClick={exportResults} />
      <button>Give Student Data</button>
    </div>
  );
};

export default Dashboard;
