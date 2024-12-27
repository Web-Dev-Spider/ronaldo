import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <Container fluid className="bg-dark text-white pt-5">
      <h3 className="text-center mb-3">Contact</h3>
      <div className="container">
        <Form>
          <div className="row">
            <div className="col-md-6">
              <Form.Control
                type="text"
                placeholder="Your Name"
                className="me-4 mb-3"
                required
              />
            </div>
            <div className="col-md-6">
              <Form.Control
                type="email"
                placeholder="Your Email"
                className="col-md-6 mb-3"
                required
              />
            </div>
          </div>
          <Form.Control
            as="textarea"
            placeholder="Your Message"
            rows={5}
            className="mb-3"
          />
          <div className="d-flex justify-content-center py-3">
            <Button variant="primary">Send Message</Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Contact;
