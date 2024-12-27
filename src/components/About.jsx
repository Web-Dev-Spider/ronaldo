import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
function About() {
  return (
    <Container className="my-4">
      <h3 className="text-center">About Christiano Ronaldo</h3>
      <Row className="justify-content-md-center">
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src="https://i.pinimg.com/736x/97/8d/fe/978dfe2eed24660a344f07c8784065c8.jpg"
            className="aboutImage"
          />
        </Col>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <p className="text-center fs-5 fw-light">
            Cristiano Ronaldo is one of the greatest football players of all
            time. Known for his unmatched dedication, skill, and athleticism, he
            has won multiple Ballon d'Or awards and led his teams to numerous
            championships. Off the field, Ronaldo is a philanthropist and a
            global inspiration.
          </p>
          <Button variant="dark">Explore Achievements</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
