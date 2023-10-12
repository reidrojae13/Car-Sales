// import React from "react";
// import { useState, useCallback } from "react";
// import deleteFriendsService from "../../services/deleteFriendsService";

// function FriendDelete() {
//   const [pageData, setFriendsData] = useState({
//     arrayOfPeople: [],
//     peopleComponents: [],
//   });

//   false && console.log(pageData.arrayOfPeople);
// , { myPerson, eObj });

//     deleteFriendsService
//       .delete(myPerson.id)
//       .then(onDeleteSuccess)
//       .catch(onDeleteError);
//   }, []);
//   const onDeleterequested = useCallback((myPerson, eObj) => {
//     console.log(myPerson.id
//   // let idToBeDeleted = myPerson.id;

//   const onDeleteSuccess = (idToBeDeleted) => {

//     console.log("onDeleteSuccess", idToBeDeleted);
//     setFriendsData((prevState) => {
//       const pd = { ...prevState };
//       pd.arrayOfPeople = [...pd.arrayOfPeople];

//       const idxOf = pd.arrayOfPeople.findIndex((friend) => {
//         let result = false;

//         if (friend.id === idToBeDeleted) {
//           result = true;
//         }
//         return result;
//       });
//       if (idxOf >= 0) {
//         pd.arrayOfPeople.splice(idxOf, 1);
//         pd.peopleComponents = pd.arrayOfPeople.map(mapPerson);
//       }
//       return pd;
//     });
//   };

//   const onDeleteError = (err) => {
//     console.log(err);
//   };
//   const mapPerson = (aPerson) => {
//     return (
//       <Person
//         person={aPerson}
//         key={"Lisa-" + aPerson.id.value}
//         onPersonClicked={onDeleterequested}
//       />
//     );
//   };
// }

// export default FriendDelete;
