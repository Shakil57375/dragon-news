import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import image_one from '../../../src/assets/1.png'
import image_two from '../../../src/assets/2.png'
import image_three from '../../../src/assets/3.png'
const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <h4 className="fs-3 my-3">All Category</h4>
        <div className="ps-4">
          {catagories.map((category) => (
            <p key={category.id}>
              <Link
                to={`/category/${category.id}`}
                className="text-decoration-none text-black"
              >
                {category.name}
              </Link>
            </p>
          ))}
        </div>
      </div>
      <Row xs={1} md={1} lg={1} className="g-4 mt-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={image_one} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={image_two} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={image_three} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LeftNav;
