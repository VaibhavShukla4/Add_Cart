import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardData from "./CardData";
import './style.css';
import { useDispatch } from "react-redux";

const Cards = () => {
  const [data, setData] = useState(CardData);

  const dispatch =useDispatch();
  const send =(e) =>{
    console.log(e);
  }

  return (
    <div className="containner mt-3">
      <h2 className="text-center">Add To Cart</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <div className="col-4 ">
              <Card style={{ width: "22rem",  }} className="mx-5 ml-4 card_style">
                <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <h5>Rs. {element.price} </h5>
                  <Card.Text>
                  {element.somedata}
                  </Card.Text>
                  <div className="button">
                  <Button variant="primary" onClick={() => send(element)}
                  className="col-lg-12">Add to cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
