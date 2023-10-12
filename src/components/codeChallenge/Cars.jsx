import React from "react";
import { useState } from "react";
import addCar from "./services/carService";

function Cars() {
  const [carForm, setCarForm] = useState({
    Make: "",
    Model: "",
    Year: "",
  });

  const onChange = (e) => {
    //console.log("onChange", e);
    const target = e.target;
    const inputNames = target.name;
    const inputValues = target.value;

    setCarForm((prevState) => {
      const clone = { ...prevState };
      clone[inputNames] = inputValues;
      console.log(clone);
      return clone;
    });
  };

  const onCarSubmit = () => {
    addCar(carForm).then(onSubmitSuccess).catch(onSubmitError);
  };
  console.log(onCarSubmit);
  function onSubmitSuccess(res) {
    console.log(res);
  }

  function onSubmitError(err) {
    console.log(err);
  }
  return (
    <div className="Form-group">
      <h1>Car Form</h1>
      <form action="" method="post" name="carForm">
        <label> Make </label>
        <div>
          <input
            type="text"
            className="Form-group"
            placeholder="Make"
            value={carForm.Make}
            name="Make"
            id="Make"
            onChange={onChange}
          />
        </div>
        <label>Model</label>
        <div>
          <input
            label="input for model"
            type="text"
            className="Form-group"
            placeholder="model"
            value={carForm.Model}
            name="Model"
            id="Model"
            onChange={onChange}
          />
        </div>
        <label> Year </label>
        <div>
          <input
            label="input for year"
            type="number"
            className="Form-group"
            placeholder="year"
            value={carForm.Year}
            name="Year"
            id="Year"
            onChange={onChange}
          />
        </div>
        <button type="button" onClick={onCarSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Cars;
