import moment from "moment";
import React from "react";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar} from "react-icons/fa";
import {Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  console.log(_id);
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{height: "40px"}} src={author?.img} roundedCircle></Image>
        <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p><small>{moment(author?.published_date).format("yyyy-MM-D")}</small></p>
        </div>
        <div>
          <FaRegBookmark className="text-primary" />
          <FaShareAlt className="text-primary" />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> : <>{details.slice(0,250)}...<Link to={`/news/${_id}`}>Read more</Link></>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex text-muted ">
        <div className="flex-grow-1 d-flex align-items-center">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span>{rating?.number}</span>
        </div>
      <div>
        <FaEye></FaEye> {total_view}
      </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
