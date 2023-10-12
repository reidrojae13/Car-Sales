import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import toastr from "toastr";
import jobsService from "../../services/jobsService";

function AddAndEditJobs() {
  const [formVal, setFormVal] = useState({
    statusId: "",
    title: "",
    description: "",
    summary: "",
    pay: "",
    slug: "",
    techCompanyId: 0,
    skills: ["string"],
  });

  let { state } = useLocation();

  useEffect(() => {
    console.log("state in form", state);
    if (state?.type === "Job_VIEW" && state?.payload) {
      // you need update state
      setFormVal((prevState) => {
        let newObj = { ...prevState };
        newObj.statusId = state.payload.statusId;
        newObj.title = state.payload.title;
        newObj.description = state.payload.description;
        newObj.summary = state.payload.summary;
        newObj.pay = state.payload.pay;
        newObj.slug = state.payload.slug;
        newObj.techCompanyId = state.payload.techCompanyId;
        newObj.skills = state.payload.skills;
        return newObj;
      });
    }
  }, [state]);

  function onEditSuccess(res) {
    console.log(res);
    toastr.success("You have Editted a Job Successfully");
  }

  function onEditError(err) {
    console.log(err);
    toastr.error("You have failed to Edit a friend");
  }

  const onFormChange = (e) => {
    const target = e.target;
    const valueOfField = target.value;
    const nameOfField = target.name;

    setFormVal((prevState) => {
      const clone = { ...prevState };
      clone[nameOfField] = valueOfField;
      return clone;
    });
  };

  const onAddJobSubmit = () => {
    console.log("I am working!");
    if (!!state?.payload.id) {
      jobsService
        .update(formVal, formVal.id)
        .then(onEditSuccess)
        .catch(onEditError);
    } else {
      jobsService.add(formVal).then(onSubmitSuccess).catch(onSubmitError);
    }
  };

  function onSubmitSuccess(res) {
    console.log(res);
    toastr.success("You have created a friend Successfully");
  }

  function onSubmitError(err) {
    console.log(err);
    toastr.error("You have failed to create a friend");
  }
  return (
    <div className="container col-4">
      <form>
        <div className=" row mb-4">
          <label className="col-sm-5">statusId</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="statusId"
              value={formVal.statusId}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">title</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="title"
              value={formVal.title}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">description</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="description"
              value={formVal.description}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">summary</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="summary"
              value={formVal.summary}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">pay</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="pay"
              value={formVal.pay}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">slug</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="slug"
              value={formVal.slug}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">techCompanyId</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="techCompanyId"
              value={formVal.techCompanyId}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">skills</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="skills"
              value={formVal.skills}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>

        <button type="button" className="btn-primary" onClick={onAddJobSubmit}>
          {state?.payload ? "update Jobs" : "Create New Job"}
        </button>
      </form>
    </div>
  );
}

export default AddAndEditJobs;
