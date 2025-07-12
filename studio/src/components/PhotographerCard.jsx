import React from "react";
import { useNavigate } from "react-router-dom";

const PhotographerCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="photographer-card">
      <img src={data.profilePic} alt={data.name} />
      <h3>{data.name}</h3>
      <p>{data.location}</p>
      <p>₹{data.price}</p>
      <p>⭐ {data.rating}</p>
      <div className="tags">
        {data.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      <button onClick={() => navigate(`/photographer/${data.id}`)}>View Profile</button>
    </div>
  );
};
export default PhotographerCard;
