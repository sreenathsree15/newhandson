import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Breadcrumb from "./Breadcrumb";
import AddToCart from "./AddToCart";
import Button from "./Button";
import Typography from "./Typography";
import Screen from "./Screen";


import '../styles/ProductDetails.css';

const StarRating = ({ rate }) => {
  return (
    <div className="stars">
      {[...Array(5)].map((_, index) => {
        const number = index + 0.5;
        return (
          <span key={index}>
            {rate >= index + 1 ? (
              <FaStar className="icon" />
            ) : rate >= number ? (
              <FaStarHalfAlt className="icon" />
            ) : (
              <AiOutlineStar className="icon" />
            )}
          </span>
        );
      })}
    </div>
  );
};

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setReviews([
          {
            rating: response.data.rating.rate,
            text: `This product has ${response.data.rating.count} reviews.`,
          }
        ]);
      })
      .catch((error) => setError(error));
  }, [id]);

  if (error) return <p>Error fetching product details: {error.message}</p>;
  if (!product) return <p>Loading product details...</p>;

  const handleBuyNowClick = () => {
    navigate(`/BuyNow/${product.id}`);
  };

  const submitReview = () => {
    if (userRating === 0 || reviewText.trim() === "") {
      alert("Please provide both a rating and a review.");
      return;
    }
    const newReview = { rating: userRating, text: reviewText };
    setReviews([...reviews, newReview]);
    setUserRating(0);
    setReviewText("");
  };


  return (

    <div className="container">
      <main>
        <Breadcrumb />
        <Wrapper className='page'>

          <div className="product-details">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>

            {/* Display Existing Product Rating */}
            <div className="product-rating">
              <h3>Product Rating</h3>
              <StarRating rate={product.rating.rate} count={product.rating.count} />
            </div>


            <button type="button" onClick={handleBuyNowClick}>
              BUY NOW
            </button><br />
            <AddToCart product={product} />

            {/* Review Form */}
            <div className="submit-review">
              <h3>Submit Your Review</h3>
              <select value={userRating} onChange={(e) => setUserRating(parseInt(e.target.value))}>
                <option value="0">Select Rating</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} Stars
                  </option>
                ))}
              </select>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
              />
              <Button onClick={submitReview}>Submit Review</Button>
            </div>

            {/* Display User Reviews */}
            <div className="reviews">
              <h3>Customer Reviews</h3>
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div key={index}>
                    <p>{review.rating} Stars - {review.text}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          </div>
        </Wrapper>
      </main>
    </div>

  );
}

export default ProductDetails;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;