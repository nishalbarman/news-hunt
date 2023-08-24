import React from "react";

function Loader({ url, style }) {
  return <img src={url} alt="Loading" style={style} />;
}

export default Loader;
