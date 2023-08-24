import React from "react";

function BreakingSmallCard({ news, desc, published_data, image_url }) {
  return (
    <>
      <div className="small-cards">
        <div className="small-card-image-outer">
          <img src={image_url} alt={news} />
        </div>
        <div>
          <h4>{news}</h4>
        </div>
      </div>
      <div className="horizontal-devider" />
    </>
  );
}

export default BreakingSmallCard;
