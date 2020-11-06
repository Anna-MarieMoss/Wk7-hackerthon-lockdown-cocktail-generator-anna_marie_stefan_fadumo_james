import { useState, useEffect } from "react";
import ResultsCard from "../ResultsCard";

function SearchByIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const [click, setClick] = useState(false);
  const [fetchedCocktails, setfetchedCocktails] = useState([]);

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
        defaultValue=""
        onChange={(e) => {
          setSelectedIngredient(e.target.value);
        }}
      >
        {" "}
        <option value=""></option>
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
        🔎 Search {selectedIngredient.toLowerCase()} cocktails
      </button>

      <section className="resultsSection">
        {fetchedCocktails.map((obj) => {
          return (
            <ResultsCard
              key={obj.idDrink}
              idDrink={obj.idDrink}
              drinkTitle={obj.strDrink}
              drinkImage={obj.strDrinkThumb}
            />
          );
        })}
      </section>
    </div>
  );
}

export default SearchByIngredients;
