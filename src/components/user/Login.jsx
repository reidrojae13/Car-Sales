import { useState } from "react";
import toastr from "toastr";
import serviceUsers from "../../services/seviceUsers";
import { Formik, Form, ErrorMessage } from "formik";
import { Field } from "formik";
import * as Yup from "yup";

//import { useNavigate } from "react-router-dom";
// import SiteNav from "../SiteNav";
//import { useNavigate } from "react-router-dom";

const basicSchema = Yup.object().shape({
  password: Yup.string().required("Is Required"),
  email: Yup.string().email("Invalid Email ").required("Required"),
});

function Login(props) {
  //const navigate = useNavigate();
  const [formData] = useState({
    email: "",
    password: "",
    tenantId: "U052UAB1QGL",
  });

  // const onFormChange = (e) => {
  //   const target = e.target;
  //   const valueOfField = target.value;
  //   const nameOfField = target.name;

  //   setFormVal((prevState) => {
  //     const clone = { ...prevState };
  //     clone[nameOfField] = valueOfField;
  //     return clone;
  //   });
  // }

  const onLoginSubmit = () => {
    console.log("I am working!");
    serviceUsers.Login(formData).then(onLoginSuccess).catch(onLoginError);
  };

  const onLoginSuccess = (res) => {
    serviceUsers.currentUser().then(currentUserSuccess).catch(currentUserError);
    console.log(res, "LLLLLLLLL");
    toastr.success("You have Logged in Successfully", res);
  };

  const onLoginError = (err) => {
    toastr.error("incorrect input");
    console.log("failed to login", err);
  };

  const currentUserSuccess = (res) => {
    serviceUsers
      .GetId(res.data.item.id)
      .then(onGetUserIdSuccess)
      .catch(onGetUserIdError);
    console.log(res, "OOOO");
    toastr.success(`Welcome ${res.data.item.name}`);
  };

  function currentUserError(err) {
    console.log(err);
    toastr.error("You Failed to Get CurrentUser");
  }

  const onGetUserIdSuccess = (res) => {
    console.log(res, "PPPPPP");
    const currentUser = res.data.item;
    //  const user = props.user
    props.userUpdater((prevState) => {
      let clone = { ...prevState };
      clone.firstName = currentUser.firstName;
      clone.lastName = currentUser.lastName;
      clone.isLoggedIn = true;
      return clone;
    });
  };

  const onGetUserIdError = () => {};

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Formik
            enableReinitialize={true}
            initialValues={formData}
            onSubmit={onLoginSubmit}
            validationSchema={basicSchema}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" className="form-control" />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="has-error"
              />
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="has-error"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-customized mt-4"
              >
                sign in
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

// Login.propTypes = {
//   login: PropTypes.shape({
//     Email: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//   }),

export default Login;
