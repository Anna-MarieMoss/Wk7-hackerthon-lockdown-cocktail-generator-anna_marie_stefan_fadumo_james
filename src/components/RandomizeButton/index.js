import React, { useState, useEffect } from "react";

function RandomizeButton(props) {
  const { setRandomCocktail, cocktailName, className } = props;

  const [click, setClick] = useState(false);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setRandomCocktail(data);
      });
  }, [click]);

  // YouTube Bit
  // useEffect(() => {
  //   // fetch goes here if
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCHu_p97Kt0M9WVHcmHYHwvymuiIj-6jps&q=how to make a ${cocktailName} cocktail`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       console.log(data.items[0].id.videoId);
  //       console.log(data.items[0].snippet.title);
  //     });
  // }, [click]);

  return (
    <button onClick={() => setClick(!click)} class={className}>
      Get random cocktail!
    </button>
  );
}

export default RandomizeButton;
