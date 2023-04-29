import React from "react";
import logo from "../../assets/logo.png";
import Marquee from "react-fast-marquee";
import moment from "moment";
import { Button, Container} from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Container className="mt-4">
        <div className="text-center">
          <img src={logo} alt="" />
          <p className="text-secondary">
            <small>Journalism Without Fear or Favour</small>
          </p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className="d-flex">
          <Button variant="danger">Latest</Button>
          <Marquee speed={50} className="text-danger">
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
      </Container>
    </div>
  );
};

export default Header;
