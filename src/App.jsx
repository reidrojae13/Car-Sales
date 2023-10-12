import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
//import { useEffect } from "react";
//import "./App.css";
import Jobs from "./components/jobList/Jobs";
//import { useLocation } from "react-router-dom";
import Sports from "./components/user/Sports";
//import serviceUsers from "./services/seviceUsers";
import Companies from "./components/techcompanies/Companies";
import Events from "./components/events/Events";
import TestAndAjax from "./components/TestAndAjax";
import Login from "./components/user/Login";

import Friends from "./components/friends/Friends";
// import Cars from "./components/codeChallenge/Cars";
import Register from "./components/user/Register";
import SiteNav from "./components/SiteNav";
import Home from "./components/Home";
import AddAndEdit from "./components/Edit/AddAndEdit";
import Users from "./components/codeChallenge/Users";
import AddAndEditJobs from "./components/jobList/Add&EditJobs";
import AddCompany from "./components/techcompanies/AddCompany";
//import Recipes from "./components/user/Recipes";
import { useState } from "react";
function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    isLoggedIn: false,
  });
  // const [aNumber, setANumber] = useState(20);
  // console.log(user);
  // let { state } = useLocation();

  // useEffect(() => {
  //   console.log("state in form", state);
  //   if (state?.type === "USER_VIEW" && state?.payload) {

  //     });
  //   }
  // }, [user]);

  return (
    <React.Fragment>
      {/* <Recipes /> */}
      {/* <p>A number : {setUser}</p> */}
      <SiteNav user={user}></SiteNav>
      {/* <h2>hello {state?.payload ? state.payload.firstName : "unknown user"}</h2> */}
      <Routes>
        <Route path="/editjobs" element={<AddAndEditJobs />}>
          <Route path="/editjobs/:ajobId" element={<AddAndEditJobs />}></Route>
        </Route>
        <Route path="/sports" element={<Sports />}></Route>
        <Route path="/companies" element={<Companies />}></Route>
        <Route path="/companyadd" element={<AddCompany />}></Route>
        <Route path="/companyadd/:companyId" element={<AddCompany />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/onedit" element={<AddAndEdit />}></Route>
        <Route path="/onedit/:friendId" element={<AddAndEdit />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/test&ajax" element={<TestAndAjax />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route
          path="/login"
          element={<Login userUpdater={setUser} user={user} />}
        ></Route>
        {<Route path="/register" element={<Register />}></Route>}
        {
          <Route
            path="/navsite"
            element={<SiteNav currentUser={user} />}
          ></Route>
        }
        {/* <Route path="/car-form" element={<carForm></carForm>}></Route> */}
        <Route path="/home" element={<Home currentUser={user} />}></Route>
      </Routes>
      <footer className="bg-secondary">
        <p>&copy; Sabio 2019-2020</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
