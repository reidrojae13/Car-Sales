import React from "react";
import { useState, useCallback } from "react";
import usersService from "./services/usersService";
import SingleUser from "./SingleUser";

function Users() {
  const [usersData, setUsersData] = useState({
    data: [],
    usersComponents: [],
  });

  const toggleUser = useCallback(() => {
    usersService.getUsers().then(userSuccess).catch(userError);
  }, []);

  function userSuccess(res) {
    var users = res.data;

    var userCards = users.map(mappingUsers);

    setUsersData((prevState) => {
      let clone = { ...prevState };
      clone.data = users;
      clone.usersComponents = userCards;
      return clone;
    });
    console.log(userCards);
  }

  function mappingUsers(singleuser) {
    console.log(singleuser);
    return (
      <SingleUser
        name={singleuser.name}
        email={singleuser.email}
        id={singleuser.id}
        key={singleuser.id}
      />
    );
  }

  function userError(err) {
    console.log(err);
  }

  function filterUsers() {
    const filterById = (userItem) => {
      let result = false;
      if (userItem.id > 5) {
        result = true;
      }
      return result;
    };

    var myFilterData = usersData.data.filter(filterById);
    console.log("My filter Users!!!!", myFilterData);

    setUsersData((prevState) => {
      const pd = { ...prevState }; //--> Never update state directly
      pd.usersComponents = myFilterData.map(mappingUsers);
      return pd;
    });
  }

  //--> we are adjust the components that will be displayed to the user based off our returned filtered list;

  return (
    <div className="container">
      <h2> Users</h2>
      <button onClick={toggleUser}> Show Users</button>
      <button onClick={filterUsers}> Filter Users </button>
      <div>{usersData.usersComponents}</div>
    </div>
  );
}

export default Users;
