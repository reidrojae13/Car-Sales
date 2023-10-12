import React, { useState } from "react";
import serviceUsers from "../../services/seviceUsers";
import toastr from "toastr";

function Register() {
  const [formVal, setFormVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatarUrl: "",
    tenantId: "U052UAB1QGL",
  });

  const onFormChange = (e) => {
    const target = e.target;
    const valueOfField = target.value;
    const nameOfField = target.name;

    setFormVal((prevState) => {
      const clone = { ...prevState };
      clone[nameOfField] = valueOfField;
      console.log(clone);
      return clone;
    });
  };

  const onFormSubmit = () => {
    //console.log("I am working!")

    serviceUsers.Register(formVal).then(onSubmitSuccess).catch(onSubmitError);
  };

  function onSubmitSuccess(res) {
    console.log(res);
    toastr.success("Your have Registered Successfully");
  }

  function onSubmitError(err) {
    console.log(err);
    toastr.error("You have failed to Register");
  }

  return (
    <div className="container">
      <div className="form-center">
        {/* Form 1 */}
        <form action="" method="post">
          {/* First name input */}

          <label> First Name</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              value={formVal.firstName}
              name="firstName"
              id="firstName"
              onChange={onFormChange}
            />
          </div>
          {/* Last name input*/}

          <label>Last Name</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter last name"
              value={formVal.lastName}
              name="lastName"
              id="lastName"
              onChange={onFormChange}
            />
          </div>

          {/* Current votes input */}

          <label>Email</label>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter votes"
              value={formVal.email}
              name="email"
              id="email"
              onChange={onFormChange}
            />
          </div>

          <label>Password</label>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={formVal.password}
              name="password"
              id="passwotd1"
              onChange={onFormChange}
            />
          </div>

          <label>Confirm Password</label>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={formVal.passwordConfirm}
              name="passwordConfirm"
              id="passwotd1"
              onChange={onFormChange}
            />
          </div>

          {/* Img url */}
          <label>Avatar URL</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={formVal.imageUrl}
              name="avatarUrl"
              id="avatarUrl"
              onChange={onFormChange}
            />
            <button
              type="button"
              className="btn btn-primary btn-customized mt-4"
              onClick={onFormSubmit}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
