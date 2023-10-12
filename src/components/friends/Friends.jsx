import React from "react";
import { useState, useEffect } from "react";
// import addFriends from "../../services/addFriends"
// import addFriendsService from "../../services/getAllFriends";
import friendsService from "../../services/friendService";
// import { useCallback } from "react";
// import deletePersonService from "../../services/deletePersonService";
import { useCallback } from "react";
import FriendsCard from "./FriendsCard";
// import FriendSearch from "./FriendSearch";
import "./friends.css";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { Link } from "react-router-dom";
import debug from "sabio-debug";
const _logger = debug.extend("UserLogin");

function Friends() {
  // const [count, setCount] = useState(0);
  const [friendsData, setFriendsData] = useState({
    data: [],
    friendComponents: [],
    pageIndex: 0,
    pageSize: 10,
    searchQuery: "",
  });
  // mutability & persistance - useState
  //  mutability -setState

  useEffect(() => {
    friendsService
      .getPage(friendsData.pageIndex, friendsData.pageSize)
      .then(friendsSuccess)
      .catch(friendsError);
    // what if i wanted to use a different api call from friends

    // addFriendsService.getAll().then(friendsSuccess).catch(friendsError);
  }, []);
  _logger(friendsData);

  function mappingFriends(friend) {
    console.log(friend, "::::::::::::");
    return (
      <FriendsCard
        key={friend.id}
        friendObj={friend}
        onDeleteRequested={() => onDeleteRequested(friend)}
      />
    );
  }

  const onDeleteRequested = useCallback((myPerson) => {
    console.log(myPerson.id, { myPerson });
    // const handler = getDeleteSuccessHandler(myPerson.id); /////
    friendsService
      .delete(myPerson.id)
      .then(getDeleteSuccessHandler)
      .catch(onDeleteError);
  }, []);

  const getDeleteSuccessHandler = (idToBeDeleted) => {
    console.log("idToBeDeleted");

    // console.log("onDeleteSuccess", idToBeDeleted);
    setFriendsData((prevState) => {
      const pd = { ...prevState };
      console.log(pd.data, "<------- pageData");
      pd.data = [...pd.data];
      console.log(pd.data, "<-----");
      const idxOf = pd.data.findIndex((friend) => {
        let result = false;
        if (friend.id === idToBeDeleted) {
          result = true;
        }
        return result;
      });
      console.log(idxOf, "<-------------- idxOf");
      if (idxOf >= 0) {
        pd.data.splice(idxOf, 1);
        pd.friendComponents = pd.data.map(mappingFriends);
      }
      return pd;
    });
  };

  function friendsSuccess(res) {
    var friends = res.data.item.pagedItems;
    console.log(friends);
    var friendCards = friends.map(mappingFriends);

    setFriendsData((prevState) => {
      let clone = { ...prevState };

      clone.data = friends; // --> array of basic js objects
      clone.friendComponents = friendCards; // --> array of recipeCards

      return clone;
    });

    _logger(friendCards);
  }

  function friendsError(err) {
    console.log(err);
  }
  const onDeleteError = (err) => {
    console.log("Delete", err);
  };

  const searchForm = () => {
    friendsService
      .search(
        friendsData.pageIndex,
        friendsData.pageSize,
        friendsData.searchQuery
      )
      .then(searchSuccess)
      .catch(searchError);
  };

  function searchSuccess(res) {
    var queryData = res.data.item.pagedItems;
    console.log(queryData, "RRRRRRRRRRR");
    var searchCards = queryData.map(mappingFriends);

    setFriendsData((prevState) => {
      let clone = { ...prevState };

      clone.data = queryData; // --> array of basic js objects
      clone.friendComponents = searchCards; // --> array of recipeCards
      return clone;
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
    setFriendsData((prevState) => {
      return {
        ...prevState,
        searchQuery: inputValues,
      };
    });
  };
  const onIndexChange = (e) => {
    e.preventDefault();
    const inputValues = e.target.value;
    setFriendsData((prevState) => {
      return {
        ...prevState,
        pageIndex: inputValues,
      };
    });
  };
  return (
    <div className="container-fluid friends-container">
      <div className="container d-flex justify-content-around">
        {/* <div className="row"> */}
        <div className="col-2 btn-danger">
          <Link className="btn btn-danger" to={"/onedit"}>
            {" "}
            add a frend
          </Link>
        </div>

        <div className="input-group col-6">
          <div className="form-outline">
            <input
              type="text"
              id="form1"
              className="form-control"
              placeholder="search friend"
              value={friendsData.searchQuery}
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
      <div className="row friends-row">{friendsData.friendComponents}</div>
      {/* <div className="row">{getDeleteSuccessHandler.friendComponents}</div> */}
      {/* all the data you need is inside the success response */}
      <Pagination pageSize={onIndexChange} total={50}></Pagination>
    </div>
  );
}

export default Friends;
