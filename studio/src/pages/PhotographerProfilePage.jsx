import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SendInquiryModal from "../components/SendInquiryModal";

const PhotographerProfilePage = () => {
  const { id } = useParams();
  const photographer = useSelector((state) =>
    state.photographers.all.find((p) => p.id === parseInt(id))
  );

  if (!photographer) return <p>Photographer not found.</p>;

  return (
    <div className="profile-page">
      <h1>{photographer.name}</h1>
      <p>{photographer.bio}</p>
      <p>Price: ₹{photographer.price}</p>
      <p>Location: {photographer.location}</p>
      <div className="tags">
        {photographer.styles.map((style) => (
          <span key={style} className="tag">{style}</span>
        ))}
      </div>
      <div className="gallery">
        {photographer.portfolio.map((img, i) => (
          <img key={i} src={img} alt={`Portfolio ${i}`} />
        ))}
      </div>
      <div className="reviews">
        <h3>Reviews</h3>
        {photographer.reviews.map((r, i) => (
          <div key={i} className="review">
            <strong>{r.name}</strong> - {r.rating}⭐
            <p>{r.comment}</p>
            <small>{r.date}</small>
          </div>
        ))}
      </div>
      <SendInquiryModal photographerName={photographer.name} />
    </div>
  );
};
export default PhotographerProfilePage;