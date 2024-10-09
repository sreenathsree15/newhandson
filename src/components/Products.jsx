import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Nav, Form, FormControl, Button, Dropdown, Modal } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaProductHunt, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Header.css';
import '../styles/Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setData(response.data))
      .catch((error) => setError(error));
  };

  const filterProducts = () => {
    let filteredData = data;

    
    if (category !== '') {
      filteredData = filteredData.filter((item) => {
        if (category === "Men's Clothing" && item.category === "men's clothing") return true;
        if (category === "Women's Clothing" && item.category === "women's clothing") return true;
        if (category === 'Jewellery' && item.category === 'jewelery') return true;
        if (category === 'Electronics' && item.category === 'electronics') return true;
        if (category === 'Sports' && item.category === 'sports') return true;
        return false;
      });
    }

    
    if (searchInput !== '' && searchTriggered) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    return filteredData;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTriggered(true);
  };

  const handleCloseModal = () => setShowContactModal(false);
  const handleShowModal = () => setShowContactModal(true);

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
          <Navbar.Brand href="/">BuyWise</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                <FaHome /> Home
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <FaProductHunt /> Products
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setCategory("Men's Clothing")}>
                    Men's Clothing
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategory("Women's Clothing")}>
                    Women's Clothing
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategory('Jewellery')}>
                    Jewellery
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategory('Electronics')}>
                    Electronics
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategory('Sports')}>
                    Sports
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="/about">
                <FaInfoCircle /> About
              </Nav.Link>
            
              <Nav.Link onClick={handleShowModal}>
                <FaEnvelope /> Contact
              </Nav.Link>
            </Nav>

            <Form inline className="search-container" onSubmit={handleSearch}>
              <FormControl
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </Form>

            <Nav>
              <Nav.Link href="/signin">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showContactModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>No. 55 Sy No 8 to 14 I & J Block – Ground Floor</p>
          <p>Embassy Tech Village | Outer Ring Road</p>
          <p>Devarbisanahalli Varthur, Bengaluru – 560130</p>
          <p><FaEnvelope /> Email: info@example.com</p>
          <p><FaPhone /> Phone: +91 9876543210</p>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className="me-3" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="me-3" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

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
          <img
            className="d-block w-100"
            src="https://cdn.sanity.io/images/qa41whrn/prod/8bf879b51210606ee75989723c789b98ede86e93-6000x2167.jpg?w=1440&q=80&auto=format"
            alt="Puma: Empowering Your Every Move"
          />
          <Carousel.Caption>
            <h3>Puma: Empowering Your Every Move</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.malabargoldanddiamonds.com/media/wysiwyg/store_pages/india/storepage_banner.jpg"
            alt="Malabar Gold & Diamonds"
          />
          <Carousel.Caption>
            <h3>Malabar Gold & Diamonds</h3>
            <p>Discover exquisite jewelry collections.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="products-container">
        {error ? (
          <p>Error fetching products: {error.message}</p>
        ) : (
          <ul className="products-list">
            {filterProducts().map((item) => (
              <li key={item.id} className="product-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image"
                />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
                <button type="button">BUY</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Header;
