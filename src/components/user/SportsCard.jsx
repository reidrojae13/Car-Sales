import React from "react";

function SportsCards(props) {
  function onClick() {
    console.log(props.rating);
  }
  return (
    <div className="container" key={props.rating}>
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">{props.sport}</h5>
          <p className="card-text">{props.team}</p>
          <p className="card-text">{props.rating}</p>
        </div>
        <button onClick={onClick}> Show rating</button>
      </div>
    </div>
  );
}

export default SportsCards;
