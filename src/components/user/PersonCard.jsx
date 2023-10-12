import React from "react";

function Person(props) {
  const aPerson = props.person;

  const onLocalpersonClicked = (evt) => {
    evt.preventDefault();
    props.onPersonClicked(props.person, evt);
  };

  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src={aPerson.picture.large}
          className="card-image-top"
          alt="love code"
          onClick={onLocalpersonClicked}
        />
        <div className="card-body">
          <h5 className="card-title">
            {aPerson.name.first} {aPerson.name.last}
          </h5>
          <p className="card-text">
            This is just a example of text to fill up the card
          </p>
          <button
            className="link-btn btn btn-primary"
            onClick={onLocalpersonClicked}
          >
            Go somewhere
          </button>
        </div>
      </div>
    </div>
  );
}
export default Person;
