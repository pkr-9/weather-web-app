import React, { useEffect, useRef, useState } from "react";

interface WeatherFormProps {
  onSearch: (city: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus(); // Auto-focus on load
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <input
        ref={inputRef}
        type="text"
        className="form-control w-50 me-2"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default WeatherForm;
