import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import WeatherHistoryTable from "../components/WeatherHistoryTable";
import axios from "axios";

export interface WeatherHistoryEntry {
  id: number;
  city: string;
  temperature: number;
  description: string;
  timestamp: string;
}

const HistoryPage = () => {
  const [history, setHistory] = useState<WeatherHistoryEntry[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/history")
      .then((res) => setHistory(res.data))
      .catch((err) => console.error("Failed to fetch history", err));
  }, []);

  return (
    <>
      <Navigation />
      <div className="container py-4">
        <h2 className="mb-4">Search History</h2>
        <WeatherHistoryTable history={history} />
      </div>
    </>
  );
};

export default HistoryPage;
