import { useState } from "react";
import { getRecipeHF } from "/src/ai.js";
import IngredientsList from "./IngredientsList";
import Loading from "./Loading";
import RecipePrompt from "./RecipePrompt";
import Recipe from "./Recipe";
import RedoPrompt from "./RedoPrompt";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  function resetAll() {
    console.log("resetAll button is clicked");
    setIngredients([]);
    setRecipe("");
  }

  function addIngredients(formData) {
    console.log("form is submitted");
    const newIng = formData.get("ingredient-field");

    if (newIng) {
      setIngredients((prevIng) => {
        return [...prevIng, newIng];
      });
    }
  }

  async function getRecipe() {
    console.log("get recipe is clicked!");
    setLoading(true);

    // setTimeout(() => {
    //   console.log("delaying...");
    // }, 100)();
    const generatedRecipe = await getRecipeHF(ingredients);
    setLoading(false);
    setRecipe(generatedRecipe);
  }

  return (
    <main>
      <form action={addIngredients}>
        <input
          type="text"
          name="ingredient-field"
          id="ingredient-field"
          placeholder="e.g. cheese"
        />
        <button>Add ingredient</button>
      </form>

      <IngredientsList ingredients={ingredients} />
      {!recipe ? (
        <RecipePrompt ingredients={ingredients} getRecipe={getRecipe} />
      ) : (
        <RedoPrompt resetAll={resetAll} />
      )}
      {loading ? <Loading /> : undefined}
      {recipe && !loading ? <Recipe recipe={recipe} /> : undefined}
    </main>
  );
}
