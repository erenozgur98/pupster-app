import React from "react";

function Discover(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>{props.}</h3>
      <h3>{props.}</h3>
      <h3>{props.}</h3>
    </div>
  );
}

export default Discover;
