import { Card } from "react-bootstrap";

interface WeatherData {
  name: string;
  main: { temp: number };
  weather: { description: string }[];
}

export default function WeatherCard({ weather }: { weather: WeatherData }) {
  return (
    <Card className="mt-4 shadow weather-card">
      <Card.Body>
        <Card.Title>{weather.name}</Card.Title>
        <Card.Text>
          <strong>Temp:</strong> {weather.main.temp}°C
          <br />
          <strong>Condition:</strong> {weather.weather[0].description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
