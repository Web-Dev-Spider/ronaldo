import React from "react";
import { Container } from "react-bootstrap";
import { FaHeart } from "react-icons/fa6";

function Footer() {
  return (
    <Container fluid className="footer text-white text-center py-3">
      <p>
        © 2024 Cristiano Ronaldo Portfolio | Designed with{" "}
        <FaHeart className="text-danger" />
      </p>
    </Container>
  );
}

export default Footer;
