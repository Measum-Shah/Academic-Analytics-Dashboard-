const TopPerformers = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <h2 className="text-xl font-bold mb-2">🏆 Top 5 Performers</h2>
      <ul className="space-y-1">
        {data.map((student, index) => (
          <li key={index} className="border-b py-1">
            {student.Name} — {student.Average}% {/* Uppercase keys */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TopPerformers;