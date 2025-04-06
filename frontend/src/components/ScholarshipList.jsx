const ScholarshipList = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full mt-6">
      <h2 className="text-xl font-bold mb-2">🎓 Scholarship Candidates (Avg &gt; 85%)</h2>
      <ul className="space-y-1">
        {data.map((student, index) => (
          <li key={index} className="border-b py-1">
            {student.Name} — {student.Average}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScholarshipList;