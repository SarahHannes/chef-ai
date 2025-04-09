export default function RecipePrompt(props) {
  const { ingredients, getRecipe } = props;
  const getRecipePrompt = (
    <div className="flex get-recipe-prompt">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button onClick={getRecipe} className="orange-btn">
        Get a recipe
      </button>
    </div>
  );
  return <>{ingredients.length >= 4 ? getRecipePrompt : null}</>;
}
