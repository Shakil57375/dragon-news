import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../assets/bg.png'
const RightNav = () => {
  return (
    <div>
      <h5 className="fs-3 my-3">Login with</h5>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle className="text-info" /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub className="text-dark" /> Login with Github
      </Button>
      <div className="mt-3">
        <h4 className="mt-4">Find us on</h4>
        <ListGroup className="gap-2">
          <ListGroup.Item><FaFacebook className="text-primary" /> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter className="text-primary" /> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram className="text-danger" /> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div  className="position-relative">
        <img src= {bg} alt="" />
        <div className="position-absolute  top-0 start-0 py-5 ">
            <div className="padding-5 text-center mt-5 pt-5">
                <h1 className="text-white py-2">Create an Amazing Newspaper</h1>
                <p className="text-white py-2">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn p-3 rounded-0 text-white fs-5 font-semibold btn-info py-2">Learn more</button>                                            
            </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
