import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardsData from "./CardsData";
import { useDispatch } from "react-redux";
import "./style.css";
import {ADD} from '../actions/Action';

const Cards = () => {
  const [data, setData] = useState(CardsData);

  const dispatch =useDispatch();
  const send=(e)=>
  {
    //console.log(e);
    dispatch(ADD(e));
    alert(`${e.name} added to cart`);
  }


  return (
    <div className="container mt-3">
      <h2 className="text-center text-decoration-underline text-white">Available Plants</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <div key={id} className="col-md-4 mb-3 d-flex">
              <Card className="card-container mx-2 mt-4">
                <div className="card-img-container">
                  <Card.Img variant="top" src={element.image} alt={element.name} className="card-img" />
                </div>
                <Card.Body className="card-body">
                  <div>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                      {element.description}
                      <br />
                      <br />
                      Price: ${element.price}
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button variant="primary" className="buyButton" onClick={()=>send(element)}>Buy now</Button>
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