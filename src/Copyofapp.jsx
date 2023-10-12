import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
// import Friends from "./components/friends/Friends"
import Jobs from "./components/jobs/Jobs";
import Companies from "./components/techcompanies/Companies";
import Events from "./components/events/Events";
import TestAndAjax from "./components/TestAndAjax";
// import SiteNav from "./components/SiteNav";
// import Home from "./components/Home";
// import { useState } from "react";
import Login from "./components/user/Login";
// import Recipes from "./components/user/Recipes";
import Friends from "./components/friends/Friends";

// import PoliticalCandidates from "./components/codeChallenge/PoliticalCandidates";
import Register from "./components/user/Register";
// import Cars from "./components/codeChallenge/Cars";
// import CandidateCard from "./components/codeChallenge/PoliticalCandidateCard";

function App() {
  // const [userData] = useState({
  //   firstName: "Roaje",
  //   lastName: "Reid",
  //   isLoggedIn: false,
  //   newEntry: " ",
  // });
  return (
    <React.Fragment>
      <div>
        {/* <CandidateCard></CandidateCard> */}
        {/* <SiteNav></SiteNav> */}
        {/* <Recipes></Recipes> */}
        {/* <Cars /> */}
        <Friends />
        <Routes>
          {/* <Route
            path="/home" */}
          {/* // element={<Home user={userData} rojae={"My Name"} />} */}
          {/* ></Route> */}
          <Route path="/friends" element={<Friends />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/companies" element={<Companies />}></Route>
          <Route path="/test&ajax" element={<TestAndAjax />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {<Route path="/register" element={<Register />}></Route>}
          <Route path="/car-form" element={<carForm></carForm>}></Route>
          {/* <Route path="/politicalcandidates" element= {<PoliticalCandidates/>}></Route> */}
        </Routes>
      </div>

      <footer className="container">
        <p>&copy; Sabio 2019-2020</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
