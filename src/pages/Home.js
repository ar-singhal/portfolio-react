import React from 'react';
import img1 from './ar.jpeg';
import img2 from './html.svg';
import img3 from './css.svg';
import img4 from './bootstrap.png';
import img5 from './js.png';
import img6 from './react.png';
import img7 from './wp.png'
import { Jumbotron } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
    return (
        <div >
        <div className="top">
            <Jumbotron>
                <h1>Welcome to Portfolio!</h1><br/>
                <h1>I'm Aryan Singhal</h1>
                <h3>| Web Developer | Programmer | Freelancer |   </h3>
               
            </Jumbotron>
           
        </div>
        <div className="image1">
        <img src={img1}  style={{ "height":"400px"  }}  />
        </div>
        
        <br/>
        <div className="skl"><br/>
        <h1>Skills</h1><br/>
        <img src={img2} style={{ "height":"44px"  }} />
        <h4>HTML</h4>
        <img src={img3} style={{ "height":"44px"  }} />
        <h4>CSS</h4>
        <img src={img4} />
        <h4>Bootstrap</h4>
        <img src={img5} />
        <h4>JavaScript</h4>
        <img src={img6} />
        <h4>ReactJS</h4>
        <img src={img7} style={{ "height":"44px"  }}  />
        <h4>WordPress</h4><br/>


        </div>
        </div>

    )
}

export default withRouter(Home)
