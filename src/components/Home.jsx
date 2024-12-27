import React from "react";
import { Button, Container } from "react-bootstrap";
function Home() {
  return (
    <div className="d-flex  flex-column align-items-center text-white">
      <h1 className="fw-light">Cristiano Ronaldo</h1>
      <p className="fs-4">Football Legend | Record-Breaker | Global Icon</p>
      <Button variant="primary">Learn More</Button>
    </div>
  );
}

export default Home;
