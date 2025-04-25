import React, { useState } from "react";
import "../assets/styles.css";
import WeatherForm from "./WeatherForm";
import WeatherCard from "./WeatherCard";
import { getWeather } from "../api";
import { WeatherData } from "../types";

const Hero: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const handleSearch = async (city: string) => {
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2 className="mb-4">Check Weather</h2>
        <WeatherForm onSearch={handleSearch} />
        {weather && <WeatherCard weather={weather} />}
      </div>
    </section>
  );
};

export default Hero;
