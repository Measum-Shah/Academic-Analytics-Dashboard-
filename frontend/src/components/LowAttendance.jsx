const LowAttendance = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <h2 className="text-xl font-bold mb-2">🚫 Low Attendance (&lt;75%)</h2>
      <ul className="space-y-1">
        {data.map((student, index) => (
          <li key={index} className="border-b py-1">
            {student.Name} — {student.Attendance}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LowAttendance;