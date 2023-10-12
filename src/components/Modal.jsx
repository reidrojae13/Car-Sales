import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Modal(props) {
  const [modalThing] = useState();
  let { state } = useLocation();

  useEffect(() => {
    console.log("state in form", state);
    if (state?.type === "VIEW_MORE" && state?.payload) {
      // you need update state

      let newObj = modalThing;
      newObj.statusId = state.payload.statusId;
      newObj.title = state.payload.title;
      newObj.description = state.payload.description;
      newObj.summary = state.payload.summary;
      newObj.pay = state.payload.pay;
      newObj.slug = state.payload.slug;
      newObj.techCompanyId = state.payload.techCompanyId;
      newObj.skills = state.payload.skills;
      return newObj;
    }
  }, []);

  return (
    <React.Fragment>
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
                {props.state.title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="false">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1>{props.state.title}</h1>
    </React.Fragment>
  );
}
export default Modal;
