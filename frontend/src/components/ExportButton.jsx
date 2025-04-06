const ExportButton = ({ onClick }) => {
  return (
    <div className="text-center mt-6">
      <button
        onClick={onClick}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow"
      >
        📁 Export to CSV
      </button>
    </div>
  );
};

export default ExportButton;