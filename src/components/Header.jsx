import React from 'react'; // Add this line
import Card from 'react-bootstrap/Card';
import { Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaProductHunt } from 'react-icons/fa';
import '../styles/Header.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    <>
      <Card className="card-container">
        <Card.Body className="header-text">
          <h1>
            <span className="buywise-title">BuyWise</span>
            <span className="tagline"> - Because Every Penny Matters!</span>
          </h1>
        </Card.Body>
      </Card>

      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"><FaHome /> Home</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <FaProductHunt /> Products
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/mens-clothing">Men's Clothing</Dropdown.Item>
                  <Dropdown.Item href="#/womens-clothing">Women's Clothing</Dropdown.Item>
                  <Dropdown.Item href="#/jewellery">Jewellery</Dropdown.Item>
                  <Dropdown.Item href="#/electronics">Electronics</Dropdown.Item>
                  <Dropdown.Item href="#/sports">Sports</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="/about"><FaInfoCircle /> About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>

            {/* Search Bar */}
            <Form inline className="search-container">
              <FormControl type="text" placeholder="Search" className="search-input" />
              <Button variant="outline-success" className="search-button">Search</Button>
            </Form>

            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel className="custom-carousel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="//images.samsung.com/is/image/samsung/assets/40821/image-2024-09-25-16-49-49-401.png?imwidth=1366"
            alt="Galaxy S24 FE is here"
          />
          <Carousel.Caption>
            <h3>Galaxy S24 FE is here</h3>
            <p>Save up to $720</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={500}>
          <picture data-test-id="sanity-image" className="flex w-full bg-puma-black-800 pointer-events-none absolute inset-0 h-full" style={{ backgroundImage: 'url("data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAHABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAMGB//EACIQAAEDAwMFAAAAAAAAAAAAAAMAAQIEBREGEiEHIiUx0f/EABYBAQEBAAAAAAAAAAAAAAAAAAQCA//EAB0RAQABAwUAAAAAAAAAAAAAAAEAAgMSESExYbH/2gAMAwEAAhEDEQA/AINL6UlSjtBzw8iMvc8ZNtaH1WTqTRNVWUIjPtG545ducIiFlmizaxThsdeTH9SWJqO7FCKMZQizYf1nhERU8xtLqDP/2Q==")', backgroundSize: 'cover' }}>
            <source srcSet="https://cdn.sanity.io/images/qa41whrn/prod/8bf879b51210606ee75989723c789b98ede86e93-6000x2167.jpg?w=2160&q=80&auto=format" media="(min-width: 1024px)" />
            <source srcSet="https://cdn.sanity.io/images/qa41whrn/prod/8bf879b51210606ee75989723c789b98ede86e93-6000x2167.jpg?w=1440&q=80&auto=format" media="(min-width: 540px) and (max-width: 1023px)" />
            <source srcSet="https://cdn.sanity.io/images/qa41whrn/prod/48e631202dfefc06712ad2ce03e57b73629e9976-2083x2708.jpg?w=720&q=80&auto=format" media="(max-width: 539px)" />
            <img srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="object-cover w-full h-full" alt="" loading="eager" decoding="auto" />
          </picture>
          <Carousel.Caption>
            <h3>Puma: Empowering Your Every Move</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="img-responsive d-block w-100"
            alt=""
            src="https://static.malabargoldanddiamonds.com/media/wysiwyg/store_pages/india/storepage_banner.jpg"
          />
          <Carousel.Caption>
            <h3>Malabar Gold & Diamonds</h3>
            <p>Discover exquisite jewelry collections.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Header;
