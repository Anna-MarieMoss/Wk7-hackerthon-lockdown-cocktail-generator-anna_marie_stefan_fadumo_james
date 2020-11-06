import { useState, useEffect } from "react";

function Dropdown() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((res) => res.json())
      .then((data) => setIngredients(data.drinks));
  }, []);

  return (
    <select name="" id="">
      {ingredients.map((obj, i) => {
        return (
          <option key={i} value={obj.strIngredient1}>
            {obj.strIngredient1}
          </option>
        );
      })}
    </select>
  );
}

export default Dropdown;
