interface WeatherHistoryTableProps {
  history: WeatherHistoryEntry[];
}

const WeatherHistoryTable: React.FC<WeatherHistoryTableProps> = ({
  history,
}) => {
  if (history.length === 0) {
    return <p>No history available.</p>;
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (°C)</th>
          <th>Description</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {history.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.city}</td>
            <td>{entry.temperature}</td>
            <td>{entry.description}</td>
            <td>{new Date(entry.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeatherHistoryTable;
