import { Link } from "react-router-dom";

export default function BreweryCard({ brewery, id }) {
  const brewery_Id = id;
  return (
    <Link className="brewery-card" to={`/brewer/${brewery_Id}`}>
      <h3>{brewery.name}</h3>
      <p>
        {brewery.street}, {brewery.city}, {brewery.state}
      </p>
      <p>Address1: {brewery.Address1}</p>
      <p>Phone: {brewery.phone}</p>
      <p style={{ color: 'goldenrod' }}>rating: *****</p>
      <p>
        {/* <ul>
      {reviews.map((review, index) => (
          <li key={index}>
            <p className="userfedback"><strong>User feedback:</strong> {review.review}</p>
            <p><strong>Rating:</strong> {review.rating} / 5</p>
          </li>
        ))}
      </ul> */}
        Website:{" "}
        <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
          {brewery.website_url}
        </a>


      </p>
    </Link>
  );
}