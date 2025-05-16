import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios  from 'axios';
import { useNavigate, useParams } from "react-router";
import './MainGame.css';

function MainGame() {

  const { categoryId } = useParams();
  const [card, setCard] = useState(null);
  // console.log(carId);
  // const navigate = useNavigate();
  // const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/questions/category/${categoryId}`)
      .then((res) => setCard(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
{ card.map((obj) => ( 
      <div className="container">
        <div className="question">
          <Card>
            <Card.Body
              style={{
                width: '1300px',
                backgroundColor: 'rgb(0, 50, 94)',
                color: 'wheat',
              }}
            >
              {obj.title}
            </Card.Body>
          </Card>
        </div>
        <div className="answers">
          <div className="ab">
            <Button
              className="buttons"
              style={{
                width: '600px',
                height: '70px',
                marginRight: '0px',
                backgroundColor: 'rgb(0, 50, 94)',
                color: 'wheat',
                fontSize: '30px',
                border: 'none',
                background: 'none',
              }}
              id="a"
              variant="secondary"
            >
              {obj[0].answers.text}
            </Button>
            <Button
              className="buttons"
              id="b"
              variant="secondary"
              style={{
                width: '600px',
                height: '70px',
                marginRight: '0px',
                backgroundColor: 'rgb(0, 50, 94)',
                color: 'wheat',
                fontSize: '30px',
                background: 'none',
                border: 'none',
              }}
            >
              {obj[1].answers.text}
            </Button>
          </div>
          <div className="cd">
            <Button
              className="buttons"
              id="c"
              variant="secondary"
              style={{
                width: '600px',
                height: '70px',
                marginRight: '0px',
                backgroundColor: 'rgb(0, 50, 94)',
                color: 'wheat',
                fontSize: '30px',
                background: 'none',
                border: 'none',
              }}
            >
              {obj[2].answers.text}
            </Button>
            <Button
              className="buttons"
              id="d"
              variant="secondary"
              style={{
                width: '600px',
                height: '70px',
                marginRight: '0px',
                backgroundColor: 'rgb(0, 50, 94)',
                color: 'wheat',
                fontSize: '30px',
                background: 'none',
                border: 'none',
              }}
            >
              {obj[3].answers.text}
            </Button>
          </div>
        </div>
      </div>
)) }    </>
  );
}

export default MainGame;
