import React from "react";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobCards(props) {
  console.log(props);
  // const [modal, setModal] = useState(false);

  // const toggleModel = () => {
  //   setModal(!modal);
  // };
  const navigate = useNavigate();
  const aJob = props.job;

  const onEditClicked = (e) => {
    e.preventDefault();
    const stateForTransport = { type: "Job_VIEW", payload: aJob };
    navigate(`/editjobs/${aJob.id}`, { state: stateForTransport });
    console.log(stateForTransport);
  };

  const onViewMore = (e) => {
    console.log("Working fine");
    e.preventDefault();
    // const stateForTransport = { type: "VIEW_MORE", payload: aJob };
    // navigate({ state: stateForTransport });
    // console.log(stateForTransport.payload);

    // props.updat(aJob);

    // function stuff(e) {
    //   console.log(onEditClicked, e);
  };

  return (
    <React.Fragment>
      <div className=" col-md-4 mt-3" key={aJob.id}>
        <div>
          <div className="card ">
            <img
              src={props.job.techCompany.images[0].imageUrl}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title"> {aJob.title}</h5>
              <p className="card-text">{aJob.pay} </p>
              {/* <p className="card-text">{aJob.statusId} </p> */}
              {/* <p className="card-text">{aJob.description} </p> */}
              {/* <p className="card-text">{aJob.summary} </p>
              <p className="card-text">{aJob.slug} </p>
              <p className="card-text">{aJob.techCompanyId} </p>
              <p className="card-text">{aJob.skills} </p> */}
            </div>
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
            <div>
              <button
                type="model"
                className="btn-modal"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={onViewMore}
              >
                view more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <h2>{aJob.title}</h2>
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span aria-hidden="false">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h2>{aJob.description}</h2>
            </div>
            <div className="modal-body">{aJob.pay}</div>
            <div className="modal-body">{aJob.statusId}</div>
            <div className="modal-body">{aJob.summary}</div>
            <div className="modal-body">{aJob.slug}</div>
            <div className="modal-body">{aJob.techCompanyId}</div>
            <div className="modal-body">...</div>
            {/* <div className="modal-body">{aJob.skills}</div> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={onViewMore}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default JobCards;
