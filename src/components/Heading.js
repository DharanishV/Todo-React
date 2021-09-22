import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, Container} from 'reactstrap';

export const Heading = () => {
    return (
        <div>
          <Navbar color="dark">
            <Container>
              <NavbarBrand href="/">My List</NavbarBrand>
              <Nav>
               <Link to="/add" className="btn btn-primary">Add User</Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
    );
}
