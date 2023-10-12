import React from "react";
import { useState } from "react";
// import PoliticalCandidateCard from "./PoliticalCandidateCard";
 import politicalCandidateService from "./services/politicalCandidateService";

function PoliticalCandidates() {
  const [form1, setForm1] = useState({
    firstName: "",
    lastName: "",
    currentVotes: 0,
    party: "",
    imageUrl: "",
  })
 
  const [form2, setForm2] = useState({
    firstName2: "",
    lastName2: "",
    currentVotes2: 0,
    party2: "",
    imageUrl2: "",
  });
  const onFormChange = (e) => {
    //console.log("onChange", e);
    const target = e.target;
    const inputNames = target.name;
    const inputValues = target.value;

    setForm1((prevState) => {
      const clone = { ...prevState };
      clone[inputNames] = inputValues;
        console.log(clone);
      return clone;
    });


    setForm2((prevState) => {
        const clone = { ...prevState };
        clone[inputNames] = inputValues;
          console.log(clone);
        return clone;
      });


  };

//   const onFormSubmit = () => {
//     politicalCandidateService
//       .PoliticalCandidateCard(form1)
//       .then(onSubmitSuccess)
//       .catch(onSubmitError);
//   };
//   console.log(onFormSubmit);
//   function onSubmitSuccess(res) {
//     console.log(res);
//   }

//   function onSubmitError(err) {
//     console.log(err);
//   }

//   <PoliticalCandidateCard />;

  return (
    <div className="container">
      <div className="form-left">
       {/* Form 1 */}
        <form action="" method="post">
          {/* First name input */}

          <label> First Name</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              value={form1.firstName}
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
              value={form1.lastName}
              name="lastName"
              id="lastName"
              onChange={onFormChange}
            />
          </div>

          {/* Current votes input */}

          <label>Current Votes</label>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter votes"
              value={form1.currentVotes}
              name="currentVotes"
              id="currentVotes"
              onChange={onFormChange}
            />
          </div>
          {/* Party input */}

          <label>Party</label>

          <select className="custom-select" id="party" name="party" value={form1.party} onChange={onFormChange}>
            <option value={""}>Select</option>
            <option value="democrat">Democrat</option>
            <option value="republican">Republican</option>
            <option value="independent">Independent</option>
          </select>
          {/* Img url */}
          <label>image URL</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={form1.imageUrl}
              name="imageUrl"
              id="imageUrl"
              onChange={onFormChange}
            />
          </div>
        </form>
      </div>

      <button type="button" id="submit" className="btn btn primary" onClick={politicalCandidateService}>
        Submit{" "}
      </button>
      <button type="submit"> Reset </button>
   
   {/* Form 2 */}
      <div className="form-right">
    
        <form action="" method="post">
          {/* First name input 2*/}

          <label> First Name 2</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              value={form2.firstName2}
              name="firstName2"
              id="firstName2"
              onChange={onFormChange}
            />
          </div>
          {/* Last name input 2*/}

          <label>Last Name 2</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter last name"
              value={form2.lastName2}
              name="lastName2"
              id="lastName2"
              onChange={onFormChange}
            />
          </div>

          {/* Current votes input 2 */}

          <label>Current Votes2 </label>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter votes"
              value={form2.currentVotes2}
              name="currentVotes2"
              id="currentVotes2"
              onChange={onFormChange}
            />
          </div>
          {/* Party input */}

          <label>Party 2</label>

          <select className="custom-select" id="party" name="party" value={form2.party2} onChange={onFormChange}>
            <option value={""}>Select</option>
            <option value="democrat">Democrat</option>
            <option value="republican">Republican</option>
            <option value="independent">Independent</option>
          </select>
          {/* Img url */}
          <label>Image Url 2</label>
          <div className="form-group">
            <input
              type="text"
              alt="candidate picture"
              className="form-control"
              value={form2.imageUrl2}
              name="imageUrl2"
              id="imageUrl2"
              onChange={onFormChange}
            />
          </div>
        </form>
      </div>

      <button type="button" id="submit2" className="btn btn primary" onClick={politicalCandidateService}>
        Submit{" "}
      </button>
      <button type="submit"> Reset </button>
    </div>
  );
}

export default PoliticalCandidates;
