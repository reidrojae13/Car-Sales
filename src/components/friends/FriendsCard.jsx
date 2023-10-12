import PropTypes from "prop-types";

import React from "react";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import debug from "sabio-debug";
const _logger = debug.extend("App");

function FriendsCard(props) {
  const navigate = useNavigate();
  // const location = useLocation();
  const aFriend = props.friendObj;
  _logger(props.friendObj.primaryImage);
  const onEditClicked = (e) => {
    e.preventDefault();
    const stateForTransport = { type: "FRIEND_VIEW", payload: aFriend };
    navigate(`/onedit/${aFriend.id}`, { state: stateForTransport });
    console.log(stateForTransport);
  };

  return (
    <div
      className=" col-md-3 mt-3"
      id={props.friendObj.id}
      style={{ width: "18rem" }}
    >
      <div className="row card ">
        <img
          src={aFriend.primaryImage.imageUrl}
          className="card-img-top"
          alt="car"
        />
        <div className="card-body">
          <h5 className="card-title">{props.friendObj.title}</h5>
          <p className="card-text">{props.friendObj.bio}</p>
          <p className="card-text">{props.friendObj.summary}</p>
          <p className="card-text">{props.friendObj.headline}</p>
          <p className="card-text">{props.friendObj.slug}</p>
          <p className="card-text">{props.friendObj.statusId}</p>
          <div className="d-grid gap-2 d-md-block">
            <div>
              <button
                id="btnEdit"
                type="button"
                className="btn btn-primary"
                onClick={onEditClicked}
              >
                Edit
              </button>
            </div>

            <button
              type="button"
              className="btn btn-danger"
              onClick={props.onDeleteRequested}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

FriendsCard.propTypes = {
  friendObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
};

export default FriendsCard;
