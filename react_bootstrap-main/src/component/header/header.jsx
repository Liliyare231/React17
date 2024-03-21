import Logo from "/header/logo.png";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";


export default function Header() {
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Практика номер 17</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/library">Каталог</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >


  );
}
