import React from 'react'
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark"> 
      <Container>
        <Navbar.Brand>
          <Nav.Link href="./">Note Zipper</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            {/* margin auto center */}
            <Form inline>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav className="mr auto">
            <Nav.Link href="./MyNotes">My Notes</Nav.Link>
            <NavDropdown title="Amol Lindayat" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header