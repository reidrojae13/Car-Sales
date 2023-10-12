import React from "react";
import recipesService from "../services/recipesService";
import { useEffect, useState } from "react";
import RecipesCard from "./RecipesCard";

function Recipes() {
  const [recipesData, setRecipesData] = useState({
    data: [],
    recipesComponents: [],
  });

  useEffect(() => {
    recipesService.getAll().then(recipesSuccess).catch(recipesError);
  }, []);

  function recipesSuccess(res) {
    console.log(res);
    var recipes = res.data;

    var recipeCards = recipes.map(mappingRecipes);

    setRecipesData((prevState) => {
      let clone = { ...prevState };

      clone.data = recipes; // --> array of basic js objects
      clone.recipesComponents = recipeCards; // --> array of recipeCards

      return clone;
    });

    console.log(recipeCards);
  }

  function mappingRecipes(recipe) {
    return <RecipesCard recipe={recipe} key={recipe.id} />;
  }

  function filterDifficulty(event) {
    const targetName = event.target.name;

    const filterRecipes = (recipe) => {
      const difficulty = recipe.difficulty;

      // console.log(difficulty);

      var result = false;

      if (difficulty.toLowerCase() === targetName.toLowerCase()) {
        result = true;
      }
      return result;
    };

    if (!targetName) {
      console.log("Nothing is Here");
    } else if (targetName.toLowerCase() === "reset") {
      const resetRecipes = recipesData.data.map(mappingRecipes);
      setRecipesData((prevState) => {
        const pd = { ...prevState };
        pd.recipesComponents = resetRecipes;
        return pd;
      });
    } else {
      const filteredRecipes = recipesData.data.filter(filterRecipes);
      console.log(filteredRecipes);
      setRecipesData((prevState) => {
        const pd = { ...prevState }; //--> Never update state directly
        pd.recipesComponents = filteredRecipes.map(mappingRecipes); //--> we are adjust the components that will be displayed to the user based off our returned filtered list;
        return pd;
      });
    }
  }

  function recipesError(err) {
    console.log(err);
  }

  return (
    <div className="container">
      <button name="Easy" onClick={filterDifficulty}>
        Easy
      </button>
      <button name="Intermediate" onClick={filterDifficulty}>
        Intermediate
      </button>
      <button name="Advanced" onClick={filterDifficulty}>
        Advanced
      </button>
      <button name="reset" onClick={filterDifficulty}>
        Reset
      </button>
      <div className="row">{recipesData.recipesComponents}</div>
    </div>
  );
}

export default Recipes;
