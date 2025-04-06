const StatCard = ({ title, value, color }) => {
  return (
    <div className={`bg-${color}-100 text-${color}-800 p-4 rounded-xl shadow`}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;