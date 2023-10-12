import React from "react";
import jobsService from "../../services/jobsService";
import { useState, useEffect } from "react";
// import Pagination from "rc-pagination";
import JobCards from "./JobsCards";
import "rc-pagination/assets/index.css";
import { Link } from "react-router-dom";
//import { Modal } from "bootstrap";
// import Modal from "../Modal";

function Jobs() {
  // const [count, setCount] = useState(0);
  const [jobsData, setJobsData] = useState({
    data: [],
    jobComponents: [],
    pageIndex: 0,
    pageSize: 10,
    searchQuery: "",
  });

  // const [potato, setPotato] = useState({ title: 5 });

  // mutability & persistance - useState
  //  mutability -setState
  useEffect(() => {
    jobsService
      .getJobs(jobsData.pageIndex, jobsData.pageSize)
      .then(jobsSuccess)
      .catch(jobsError);
    // what if i wanted to use a different api call from friends
  }, []);
  console.log(jobsData);

  // setmodalthing((prevState, e) => {
  //   console.log("potato", prevState, e);
  // });

  function mappingJobs(job) {
    console.log(job, "::::::::::::");
    return <JobCards job={job} key={job.id} />;
  }

  // function myfubnct(athing) {
  //   setPotato((prevState) => {
  //     let clone = { ...prevState };

  //     clone.title = athing.title;

  //     return clone;
  //   });
  // }

  function jobsSuccess(res) {
    var jobs = res.data.item.pagedItems;
    console.log(jobs);
    var jobCards = jobs.map(mappingJobs);

    setJobsData((prevState) => {
      let clone = { ...prevState };

      clone.data = jobs; // --> array of basic js objects
      clone.jobComponents = jobCards; // --> array of recipeCards

      return clone;
    });
    console.log(jobCards);
  }

  function jobsError(err) {
    console.log(err);
  }

  const searchForm = () => {
    jobsService
      .search(jobsData.pageIndex, jobsData.pageSize, jobsData.searchQuery)
      .then(searchSuccess)
      .catch(searchError);
  };

  function searchSuccess(res) {
    var queryData = res.data.item.pagedItems;
    console.log(queryData, "RRRRRRRRRRR");
    var searchCards = queryData.map(mappingJobs);

    setJobsData((prevState) => {
      let clone = { ...prevState };

      clone.data = queryData; // --> array of basic js objects
      clone.jobComponents = searchCards; // --> array of recipeCards
      return clone;
    });
  }

  // const MappingQuery = () => {
  //   return friendsData.friendComponents;
  // };

  const searchError = (err) => {
    console.log("Search", err);
  };

  const onSearchChange = (e) => {
    e.preventDefault();
    const inputValues = e.target.value;
    setJobsData((prevState) => {
      return {
        ...prevState,
        searchQuery: inputValues,
      };
    });
  };
  return (
    <div className="container-fluid friends-container">
      <div className="container d-flex justify-content-around">
        {/* <div className="row"> */}
        <div className="col-2 btn-danger">
          <Link className="btn btn-danger" to={"/editjobs"}>
            {" "}
            add a Job
          </Link>
        </div>

        <div className="input-group col-6">
          <div className="form-outline">
            <input
              type="text"
              id="form1"
              className="form-control"
              placeholder="search friend"
              value={jobsData.searchQuery}
              onChange={onSearchChange}
            ></input>
            <label className="form-label"></label>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={searchForm}
            >
              Search
            </button>
          </div>
        </div>
        {/* </div> */}
        <div />
      </div>
      <div className="row friends-row">{jobsData.jobComponents}</div>
      {/* {displayUsers}
      {/* <div className="row">{getDeleteSuccessHandler.friendComponents}</div> */}
      {/* all the data you need is inside the success response */}
      {/* <Pagination
        pageSize={2}
        total={10}
        onChange={changePage}
        pageCount={pageCount}
        // previous={}
      ></Pagination>{" "} */}
      *
    </div>
  );
}

export default Jobs;
