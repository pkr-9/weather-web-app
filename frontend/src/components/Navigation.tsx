import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import HistoryPage from "../pages/HistoryPage";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <header className="custom-header" fluid-width="true">
      <Navbar expand="lg" className="nav2 px-3" bg="dark" variant="dark">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          {/* Brand Logo and Name */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center gap-2"
          >
            <div className="logo-img" />
            <span className="company-name">Weather Web App</span>
          </Navbar.Brand>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end user-info d-flex align-items-center gap-2"
          >
            <Nav className="nav-links d-flex list-unstyled mb-0">
              <Nav.Item>
                <Nav.Link as={Link} to="/history">
                  History
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Form className="d-flex" role="search">
              <FormControl
                type="search"
                placeholder="Search"
                className="custom-search-input me-2"
                aria-label="Search"
              />
              <Button className="custom-search-button" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
