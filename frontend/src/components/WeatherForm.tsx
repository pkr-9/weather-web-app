import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function WeatherForm({
  onSearch,
}: {
  onSearch: (city: string) => void;
}) {
  const [city, setCity] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </InputGroup>
    </Form>
  );
}
