import React from "react";
import { useEffect, useState, useCallback } from "react";
import companyService from "../../services/companyService";
import CompanyCard from "./CompanyCard";
import { Link } from "react-router-dom";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

function Companies() {
  const [companyData, setCompanyData] = useState({
    data: [],
    companyComponents: [],
    searchQuery: "",
  });
  const [pageNumber, setPageNumber] = useState({
    pageIndex: 1,
    pageSize: 2,
    totalCount: 20,
  });

  // const usersPerPage = 2;
  // const pagesVisited = pageNumber * usersPerPage;
  // const displayUsers = companyData.data
  //   .slice(pagesVisited, pagesVisited + usersPerPage)
  //   .map(mappingCompanies);

  // mutability & persistance - useState
  //  mutability -setState
  useEffect(() => {
    companyService
      .getCompany(pageNumber.pageIndex - 1, pageNumber.pageSize)
      .then(companySuccess)
      .catch(companyError);
    // what if i wanted to use a different api call from friends

    // addFriendsService.getAll().then(friendsSuccess).catch(friendsError);
  }, [pageNumber.pageIndex]);
  console.log("potato", pageNumber.pageIndex);

  function companySuccess(res) {
    var friends = res.data.item.pagedItems;
    const totalCount = res.data.item.totalCount;
    console.log(friends);
    var friendCards = friends.map(mappingCompanies);

    setCompanyData((prevState) => {
      let clone = { ...prevState };

      clone.data = friends; // --> array of basic js objects
      clone.friendComponents = friendCards; // --> array of recipeCards

      return clone;
    });

    setPageNumber((prevState) => {
      const newState = { ...prevState };
      newState.totalCount = totalCount;
      return newState;
    });

    console.log(totalCount);
  }

  function companyError(err) {
    console.log(err);
  }
  function mappingCompanies(company) {
    console.log(company, "::::::::::::");
    return (
      <CompanyCard
        key={company.id}
        company={company}
        onDeleteRequested={() => onDeleteRequested(company)}
      />
    );
  }

  const onDeleteRequested = useCallback((myPerson) => {
    console.log(myPerson.id, { myPerson });
    // const handler = getDeleteSuccessHandler(myPerson.id); /////
    companyService
      .delete(myPerson.id, myPerson.statusId)
      .then(getDeleteSuccessHandler)
      .catch(onDeleteError);
  }, []);

  const getDeleteSuccessHandler = (idToBeDeleted, Deleted) => {
    console.log(idToBeDeleted, Deleted);
  };

  function onDeleteError(err) {
    console.log(err);
  }

  const searchForm = () => {
    companyService
      .search(
        pageNumber.pageIndex,
        pageNumber.pageSize,
        companyData.searchQuery
      )
      .then(searchSuccess)
      .catch(searchError);
  };

  function searchSuccess(res) {
    var queryData = res.data.item.pagedItems;
    console.log(queryData, "RRRRRRRRRRR");
    var searchCards = queryData.map(mappingCompanies);

    setCompanyData((prevState) => {
      let clone = { ...prevState };

      clone.data = queryData; // --> array of basic js objects
      clone.companyComponents = searchCards; // --> array of recipeCards
      return searchCards;
    });
  }

  // const MappingQuery = () => {
  //   return friendsData.friendComponents;
  // };

  const searchError = (err) => {
    console.log("Delete", err);
  };

  const onSearchChange = (e) => {
    e.preventDefault();
    const inputValues = e.target.value;
    setCompanyData((prevState) => {
      return {
        ...prevState,
        searchQuery: inputValues,
      };
    });
  };
  // const pageCount = Math.ceil(companyData.data.length / usersPerPage);

  const changePage = (selected) => {
    setPageNumber((prevState) => {
      const newState = { ...prevState };
      newState.pageIndex = selected;
      return newState;
    });
  };

  return (
    <div className="container-fluid friends-container">
      <div className="container d-flex justify-content-around">
        {/* <div className="row"> */}
        <div className="col-2 btn-danger">
          <Link className="btn btn-danger" to={"/companyadd"}>
            {" "}
            add a Company
          </Link>
        </div>

        <div className="input-group col-6">
          <div className="form-outline">
            <input
              type="text"
              id="form1"
              className="form-control"
              placeholder="search friend"
              value={companyData.searchQuery}
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
      <div className="row friends-row">{companyData.companyComponents}</div>
      {companyData.friendComponents}
      {/* <div className="row">{getDeleteSuccessHandler.friendComponents}</div> */}
      {/* all the data you need is inside the success response */}
      <Pagination
        pageSize={pageNumber.pageSize}
        total={pageNumber.totalCount}
        onChange={changePage}

        // previous={}
      ></Pagination>
    </div>
  );
}

export default Companies;
