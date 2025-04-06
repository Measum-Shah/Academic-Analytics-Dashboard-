import StatCard from "./StatCard";

const SummaryCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <StatCard title="Average" value={stats.avg} color="blue" />
      <StatCard title="Max" value={stats.max} color="green" />
      <StatCard title="Min" value={stats.min} color="red" />
      <StatCard title="Std Dev" value={stats.std} color="yellow" />
    </div>
  );
};

export default SummaryCards;