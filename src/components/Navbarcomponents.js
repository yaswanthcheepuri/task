import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'



function Navbarcomponent() {
  
  
  return (
    <div>
    {/* navbar */}
    <Navbar collapseOnSelect bg="dark" expand="sm" className="navbar-dark text-white">
    <Container>
  <Navbar.Brand>Myapp</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="signup">
        <Nav.Link>Signup</Nav.Link>
        </LinkContainer>

        <LinkContainer to="login">
        <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        
        <LinkContainer to="contactus">
        <Nav.Link>Login</Nav.Link>
        </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
</div>
  );
}

export default Navbarcomponent;