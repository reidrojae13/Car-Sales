import React from "react";

function SingleUser(props) {
  const aUser = props;
  console.log(props);

  function onClickUser() {
    console.log(aUser.id);
  }

  return (
    <div className="col-md-4 mb-2" key={aUser.id}>
      <div className="card">
        <div className="card-body">
          <h3 className="card-header"> User</h3>
          <h5 className="card-title">{aUser.name}</h5>
          <p className="card-text">{aUser.email}</p>
          <button className="btn btn-primary" onClick={onClickUser}>
            Console Log Id
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;
