import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
function Contactus(props){
    return(
        <Jumbotron fluid>
  <Container>
  <div className="con">
  <i className="fa fa-id-card"></i>
  </div>
        
    <h1>Contact </h1>
    <br/><br/><br/>
    <h3 >
    
    <i className="fa fa-envelope"></i>
    Email : aryansinghal123457@gmail.com <br /><br/>
    <i className="fa fa-instagram"></i>
    Instagram : music_ar_singhal <br/><br/>
    <i className="fa fa-map"></i>
    Location : Greater Noida, Uttar Pradesh, India <br/><br/>
    <i className="fa fa-phone"></i>
    Phone : +91-9560249025 

    </h3>
    
  </Container>
</Jumbotron>
    );
}

export default Contactus;