export default function IngredientsList(props) {
  const { ingredients } = props;

  const ingredientList = ingredients.map((ing) => {
    return <li key={ing}>{ing}</li>;
  });

  console.log("ingredientList", ingredientList);

  const userPrompt = (
    <p className="orange-text">
      Enter available ingredients to get recipe ideas ...
    </p>
  );

  const listHeader = (
    <section className="ingredients-list">
      <h2>Ingredients on hand:</h2>
      <ul>{ingredientList}</ul>
    </section>
  );

  return <>{ingredientList.length > 0 ? listHeader : userPrompt}</>;
}
