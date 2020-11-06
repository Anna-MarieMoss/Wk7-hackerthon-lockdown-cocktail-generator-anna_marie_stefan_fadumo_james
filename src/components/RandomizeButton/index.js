import React, { useState, useEffect } from "react";

function RandomizeButton(props) {
  const { setRandomCocktail } = props;

  const [click, setClick] = useState(false);

  useEffect(() => {
    // fetch goes here if
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.drinks[0]);
        setRandomCocktail(data);
      });
  }, [click]);

  return <button onClick={() => setClick(!click)}>Get random cocktail!</button>;
  
}

export default RandomizeButton;
