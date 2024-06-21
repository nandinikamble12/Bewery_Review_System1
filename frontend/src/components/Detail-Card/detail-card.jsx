import { useEffect, useState } from "react";
import {  useParams, useNavigate  } from "react-router-dom";


export function DetailCard() {
 
  const { id } = useParams();
  console.log("id", id);

  const [selectedBrewery, setSelectedBrewery] = useState({});
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedBrewery(data));
  }, [id]);

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setNewRating(e.target.value);
  };
  // const handleGoBack = () => {
  //   history.push("/dashboard"); // Navigate back to the dashboard page
  // };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() && newRating > 0) {
      const updatedReviews = [...reviews, { review: newReview, rating: newRating }];
      setReviews(updatedReviews);
      setNewReview("");
      setNewRating(0);

      
      fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({ breweryId: id, review: newReview, rating: newRating }),
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json()).then(data => {
        setReviews(data.reviews); // Assuming the server returns the updated list of reviews
      });
    }
  };

  console.log("selectedBrewery", selectedBrewery);
  
  
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/dashboard');
    };
  return (
    <div className="brewery-details">
      <h2>{selectedBrewery.name}</h2>
      <p>
        <strong>Type:</strong> {selectedBrewery.brewery_type}
      </p>
      <p>
        <strong>Address:</strong> {selectedBrewery.street}, {selectedBrewery.city}, {selectedBrewery.state}
      </p>
      <p>
        <strong>Phone:</strong> {selectedBrewery.phone}
      </p>
      <p>
        <strong>Description:</strong> {selectedBrewery.description || "No description available"}
      </p>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p className="userfedback"><strong>User feedback:</strong> {review.review}</p>
            <p><strong>Rating:</strong> {review.rating} / 5</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          value={newReview}
          onChange={handleReviewChange}
          placeholder="Write a review"
        />
        
        <br />
        <label>
          Rating: 
          <select value={newRating} onChange={handleRatingChange}>
            <option value={0}>Select rating</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Review</button> 
      </form>
      <button onClick={handleButtonClick}>Go Back to Dashboard</button>
     
    </div>
  );
}
