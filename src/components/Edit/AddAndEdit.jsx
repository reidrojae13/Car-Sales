import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import toastr from "toastr";
import friendsService from "../../services/friendService";

function AddAndEdit() {
  const [formVal, setFormVal] = useState({
    id: 0,
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "Active",
    primaryImage: "",
  });

  let { state } = useLocation();

  useEffect(() => {
    console.log("state in form", state);
    if (state?.type === "FRIEND_VIEW" && state?.payload) {
      // you need update state
      setFormVal((prevState) => {
        let newObj = { ...prevState };
        newObj.id = state.payload.id;
        newObj.title = state.payload.title;
        newObj.bio = state.payload.bio;
        newObj.summary = state.payload.summary;
        newObj.headline = state.payload.headline;
        newObj.slug = state.payload.slug;
        newObj.statusId = state.payload.statusId;
        newObj.primaryImage = state.payload.primaryImage.imageUrl;
        return newObj;
      });
    }
  }, []);

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
      friendsService
        .update(formVal, formVal.id)
        .then(onEditSuccess)
        .catch(onEditError);
    } else {
      friendsService.Add(formVal).then(onSubmitSuccess).catch(onSubmitError);
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
          <label className="col-sm-5">title</label>
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
          <label className="col-sm-5 col-form-label">bio</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="bio"
              value={formVal.bio}
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
          <label className="col-sm-5 col-form-label">statusId</label>
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
          <label className="col-sm-5 col-form-label">primaryImage</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="primaryImage"
              value={formVal.primaryImage}
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

export default AddAndEdit;
