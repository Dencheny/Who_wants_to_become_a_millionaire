import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MainGame.css';

function MainGame() {
  return (
    <>
      <div className='container'>
        <div className="question">
          <Card>
            <Card.Body style={{width:'1300px', backgroundColor:'rgb(0, 50, 94)', color:'wheat'}}>ghbdtnseadafafgagadgfagadfgdfbvsdfbsdfbsfdbfsfgbfgbfasf</Card.Body>
          </Card>
        </div>
        <div className="answers">
          <div className='ab'>
          <Button className='buttons' style={{width:'600px', height:'70px', marginRight:'0px', backgroundColor:'rgb(0, 50, 94)', color:'wheat', fontSize:'30px', border:'none', background:'none' }} id='a' variant="secondary">A:awdawdawdaw</Button>
          <Button className='buttons' id='b' variant="secondary" style={{width:'600px', height:'70px', marginRight:'0px', backgroundColor:'rgb(0, 50, 94)', color:'wheat', fontSize:'30px', background:'none', border:'none' }}>B:awdawdawdaw</Button>
          </div>
          <div className='cd'>
          <Button className='buttons' id='c' variant="secondary" style={{width:'600px', height:'70px', marginRight:'0px', backgroundColor:'rgb(0, 50, 94)', color:'wheat', fontSize:'30px', background:'none', border:'none' }}>C:awdawdawdawd</Button>
          <Button className='buttons' id='d' variant="secondary" style={{width:'600px', height:'70px', marginRight:'0px', backgroundColor:'rgb(0, 50, 94)', color:'wheat', fontSize:'30px', background:'none', border:'none' }}>D:awdawdawdawd</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainGame;
