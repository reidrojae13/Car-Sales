import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import toastr from "toastr";
import companyService from "../../services/companyService";

function AddCompany() {
  const [formVal, setFormVal] = useState({
    statusId: "",
    name: "",
    profile: "",
    summary: "",
    headline: "",
    contactInformation: "",
    slug: "",
    images: [
      {
        imageTypeId: 0,
        imageUrl: "",
      },
    ],
    urls: [""],
    tags: [""],
    friendIds: [0],
  });

  let { state } = useLocation();

  useEffect(() => {
    console.log("state in form", state);
    if (state?.type === "COMPANY_VIEW" && state?.payload) {
      // you need update state
      setFormVal((prevState) => {
        let newObj = { ...prevState };
        newObj.statusId = state.payload.statusId;
        newObj.name = state.payload.name;
        newObj.profile = state.payload.profile;
        newObj.summary = state.payload.summary;
        newObj.headline = state.payload.headline;
        newObj.contactInformation = state.payload.contactInformation;
        newObj.slug = state.payload.statusId;
        newObj.images.imageTypeId = state.payload.images[0].imageTypeId;
        newObj.images.imageUrl = state.payload.images[0].imageUrl;
        newObj.urls = state.payload.urls[0].url;
        newObj.tags = state.payload.tags;
        newObj.friendIds = state.payload.friendIds;
        return newObj;
      });
    }
  }, [state]);

  function onEditSuccess(res) {
    console.log(res);
    toastr.success("You have Editted a friend Successfully");
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

  const onAddFriendSubmit = () => {
    console.log("I am working!");
    if (!!state?.payload.id) {
      companyService
        .update(formVal, formVal.id)
        .then(onEditSuccess)
        .catch(onEditError);
    } else {
      companyService.Add(formVal).then(onSubmitSuccess).catch(onSubmitError);
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
          <label className="col-sm-5 col-form-label">name</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="name"
              value={formVal.name}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">profile</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="profile"
              value={formVal.profile}
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
          <label className="col-sm-5 col-form-label">headline</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="headline"
              value={formVal.headline}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">contactInformation</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="contactInformation"
              value={formVal.contactInformation}
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
          <label className="col-sm-5 col-form-label">imageTypeId</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="images.imageTypeId"
              value={formVal.images.imageTypeId}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">imageUrl</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="images.imageUrl"
              value={formVal.images.imageUrl}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">urls</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="urls"
              value={formVal.urls}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">tags</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="tags"
              value={formVal.tags}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label">friendIds</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="friendIds"
              value={formVal.friendIds}
              onChange={onFormChange}
              className="form-control"
            />
          </div>
        </div>

        <button
          type="button"
          className="btn-primary"
          onClick={onAddFriendSubmit}
        >
          {state?.payload ? "update friends" : "Create New Friend"}
        </button>
      </form>
    </div>
  );
}

export default AddCompany;
