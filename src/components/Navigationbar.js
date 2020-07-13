import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';




const Navigationbar = ({ history }) =>{
    return(
            <div>
  
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => history.push('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => history.push('/about')}>About</Nav.Link>
                    <Nav.Link onClick={() => history.push('/contactus')}>ContactMe</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            </div>
    )
}

export default withRouter(Navigationbar);