import React from 'react';
import img1 from './responsive.png'
import img2 from './code.png'
import img3 from './design.png'
import img4 from './project.png'
function About(props){
    return(
        <div><br/>
        <h1>About</h1><br/><br/>
        <div className="abt" style={{ "textAlign":"center" }}>
        <img src={img1}  style={{ "height":"68px"  }}  />
        <h2>Responsive Frontend</h2><br/>
        <h4> design and development should respond to the user’s behavior and environment based on screen size, platform and orientation.</h4>
        <br/>
        <br/>
        <img src={img2}  style={{ "height":"68px"  }}  />
        <h2>coder</h2><br/>
        <h4>Frontend Developer who focusses on writing clean , elegant and efficient code.</h4>
        <br/>
        <br/>
        <img src={img3}  style={{ "height":"68px"  }}  />
        <h2>UI / UX Designer</h2><br/>
        <h4>Passion for designing beautiful and functional user experiences .</h4>

        </div>
        <br/>
        <img src={img4}  style={{ "height":"38px"  }}  />
        <h2>My Mini Project</h2><br/>
        <h6>https://ar-singhal.github.io/</h6><br/>
        </div>
       
    );
}

export default About;