import React from "react";
export default function Card({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  return (
    <div className="card">
      <span className="card_title">{title}</span>
      <img className="card_image" src={image} alt={title} />
      <span className="card_description">{description}</span>
      <span>
        <span className="card_price">${price}</span>
        <span className="card_category">{category}</span>
      </span>
    </div>
  );
}
