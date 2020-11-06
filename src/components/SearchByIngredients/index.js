import { useState, useEffect } from "react";

function SearchByIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const [click, setClick] = useState(false);
  const [fetchedCocktails, setfetchedCocktails] = useState("");

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((res) => res.json())
      .then((data) => setIngredients(data.drinks));
  }, []);

  useEffect(() => {
    if (selectedIngredient === "") {
      return;
    }
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`
    )
      .then((res) => res.json())
      .then((data) => setfetchedCocktails(data.drinks));
  }, [click]);

  return (
    <div>
      <select
        name="ingredients"
        id="ingredientsSelector"
        onChange={(e) => {
          setSelectedIngredient(e.target.value);
        }}
      >
        {" "}
        <option value="" selected></option>
        {ingredients.map((obj, i) => {
          return (
            <option key={i} value={obj.strIngredient1}>
              {obj.strIngredient1}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => {
          setClick(!click);
        }}
      >
        Search {selectedIngredient.toLowerCase()} cocktails
      </button>
    </div>
  );
}

export default SearchByIngredients;
