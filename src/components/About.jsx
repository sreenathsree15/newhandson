import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'; 
import '../styles/About.css'; 

function About() {
  return (
    <Container className="about-container">
      <Card className="about-card">
        <Card.Body>
          <h2>About BuyWise</h2>
          <p>
            BuyWise is your one-stop shop for affordable, high-quality products. We believe
            that every penny matters, which is why we are dedicated to offering our customers
            the best deals on a wide range of products, including electronics, fashion,
            jewelry, and more.
          </p>
          <p>
            Since our founding, we have focused on providing an easy and enjoyable shopping
            experience. Our goal is to bridge the gap between affordability and quality, making
            sure our customers get the best value for their money.
          </p>
          
          {/* CEO Section */}
          <h3>Meet Our CEO</h3>
          <div className="ceo-section">
          <Image src={require('./images/ceo.jpg')} roundedCircle className="ceo-image" />
            <div className="ceo-info">
              <h4>Lekshmi Sasidharana</h4>
              <p>Chief Executive Officer</p>
              <p>
                Lekshmi Sasidharana is a visionary leader who has been steering BuyWise towards excellence 
                with her innovative strategies and customer-centric approach. Her goal is to make online 
                shopping accessible and affordable for everyone.
              </p>
            </div>
          </div>
          
          <h3>Our Mission</h3>
          <p>
            Our mission is simple: to offer a seamless shopping experience where our customers
            feel confident that they are making wise purchasing decisions. We believe in providing
            value and satisfaction through every transaction.
          </p>
          <h3>Contact Us</h3>
          <p>
            We love hearing from our customers! If you have any questions, feedback, or inquiries,
            feel free to reach out through our contact page or visit us on social media.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
