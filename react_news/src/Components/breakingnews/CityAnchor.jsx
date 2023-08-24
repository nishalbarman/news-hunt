import React from "react";

function CityAnchor({ name, className }) {
  return (
    <a id="all" href="#" className={className || ""}>
      {name}
    </a>
  );
}

export default CityAnchor;
