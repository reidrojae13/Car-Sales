import React from "react"



function CandidateCard(props) {

  return (
    <React.Fragment>
      <div className="form-left">
        <div className="card" id="">
          <h1>Candidate 1</h1>
          <h3> {props.firstName}
            {""}
            {props.lastName}
          </h3>
          <p>{props.party}</p>
          <p>{props.currentVotes}</p>
         
        </div>
      </div>
      <div className="form-right">
        <div className="card" id="">
          <h1>Candidate 1</h1>
          <h3>
            {props.firstName}
            {""}
            {props.lastName}
          </h3>
          <p>{props.party}</p>
          <p>{props.currentVotes}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CandidateCard;



