import React from "react";

function RecipesCard(props) {
  const aRecipe = props.recipe;
  //   console.log({ aRecipe });
  return (
    <div className="col-md-4 mb-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{aRecipe.name}</h5>
          <p className="card-text">{aRecipe.difficulty}</p>
          <p className="card-text">{aRecipe.chef}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipesCard;
