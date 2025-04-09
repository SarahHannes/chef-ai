import Markdown from "react-markdown";

export default function Recipe({ recipe }) {
  return (
    <section className="recipe">
      <h3>Your personal chef recommends:</h3>

      <div className="generated-recipe">
        <Markdown>{recipe}</Markdown>
      </div>
    </section>
  );
}
