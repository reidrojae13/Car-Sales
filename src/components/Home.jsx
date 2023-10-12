import React from "react";
//import { useState, useEffect } from "react";
//import { useLocation } from "react-router-dom";

function Home(props) {
  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   isLoggedIn: false,
  // });
  // console.log(user);
  // let { state } = useLocation();

  // useEffect(() => {
  //   console.log("state in form", state);
  //   if (state?.type === "USER_VIEW" && state?.payload) {
  //     setUser((prevState) => {
  //       let newUser = { ...prevState };
  //       newUser.firstName = state.payload.firstName;
  //       newUser.lastName = state.payload.lastName;
  //       newUser.isLoggedIn = true;
  //       return newUser;
  //     });
  //   }
  // }, [state]);

  return (
    <React.Fragment>
      <h2> Hi {props.currentUser.firstName} </h2>
    </React.Fragment>
  );
}

export default Home;

// import React from "react";
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
// import "./App.css";
// import Friends from "./components/friends/Friends"
// import Jobs from "./components/jobs/Jobs";
// import Companies from "./components/techcompanies/Companies";
// import Events from "./components/events/Events";
// import TestAndAjax from "./components/TestAndAjax";
// import User from "./components/Home";

// function App() {
// const userName ="Rojae"
//   return (
//     <React.Fragment>
//       <User firstName= {userName}>
//       </User>

//       <Routes>
//          <Route path="/home" element= {<home />}></Route>
//          <Route path="/friends" element= {<Friends/>}></Route>
//         <Route path="/jobs" element= {<Jobs/>}></Route>
//        <Route path="/companies" element= {<Companies/>}></Route>
//        <Route path="/test&ajax" element= {<TestAndAjax/>}></Route>
//        <Route path="/events" element= {<Events/>}></Route>
//       </Routes>
//      </React.Fragment>
//   )

// }

// export default App;
