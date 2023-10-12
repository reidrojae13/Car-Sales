import React from "react";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

function CompanyCard(props) {
  console.log("potato", props);
  const navigate = useNavigate();
  // const location = useLocation();
  const aCompany = props.company;
  const onEditClicked = (e) => {
    e.preventDefault();
    const stateForTransport = { type: "COMPANY_VIEW", payload: aCompany };
    navigate(`/companyadd/${aCompany.id}`, { state: stateForTransport });
    console.log(stateForTransport);
  };

  return (
    <div className=" col-md-3 mt-3" id={props.company.id}>
      <div>
        <div className=" card ">
          <img
            src={props.company.images[0].imageUrl}
            className="card-img-top"
            alt="car"
          />
          <div className="card-body">
            <h5 className="card-title">{props.company.title}</h5>
            <p className="card-text">{props.company.bio}</p>
            <p className="card-text">{props.company.summary}</p>
            <p className="card-text">{props.company.headline}</p>
            <p className="card-text">{props.company.slug}</p>
            <p className="card-text">{props.company.statusId}</p>
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
    </div>
  );
}

export default CompanyCard;
