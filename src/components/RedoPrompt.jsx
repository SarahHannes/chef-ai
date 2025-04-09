export default function RedoPrompt({ resetAll }) {
  return (
    <div className="flex get-recipe-prompt">
      <div>
        <h3>Start again?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button onClick={resetAll} className="orange-btn">
        Redo
      </button>
    </div>
  );
}
