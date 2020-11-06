// set up the card component to take in an object.
//create a cocktail card that returns..
// cocktail name as a h1
// image of drink
// alcoholic or not
// ingredients and measures
// how to make

import {useState } from 'react';
import "../../App.css";

function CocktailCard({ randomCocktail }) {
     console.log(randomCocktail)
     return (
         <div>
            <ul>
                <li><h1>{randomCocktail.drinks[0].strDrink}</h1></li>
                <li><img src={randomCocktail.drinks[0].strDrinkThumb} alt="cocktail" width=
            "200px" /></li>
                <li>({randomCocktail.drinks[0].strAlcoholic})</li>
                <br></br>
                <li><b>Ingredients:</b></li>
                <li>{randomCocktail.drinks[0].strMeasure1} - {randomCocktail.drinks[0].strIngredient1}</li>
                <li>{randomCocktail.drinks[0].strMeasure2} - {randomCocktail.drinks[0].strIngredient2}</li>
                {/* <li>{randomCocktail.drinks[0].strMeasure3} - {randomCocktail.drinks[0].strIngredient3}</li>
                <li>{randomCocktail.drinks[0].strMeasure4} - {randomCocktail.drinks[0].strIngredient4}</li>
                <li>{randomCocktail.drinks[0].strMeasure5} - {randomCocktail.drinks[0].strIngredient5}</li>
                <li>{randomCocktail.drinks[0].strMeasure6} - {randomCocktail.drinks[0].strIngredient6}</li>
                <li>{randomCocktail.drinks[0].strMeasure7} - {randomCocktail.drinks[0].strIngredient7}</li>
                <li>{randomCocktail.drinks[0].strMeasure8} - {randomCocktail.drinks[0].strIngredient8}</li>
                <li>{randomCocktail.drinks[0].strMeasure9} - {randomCocktail.drinks[0].strIngredient9}</li>
                <li>{randomCocktail.drinks[0].strMeasure10} - {randomCocktail.drinks[0].strIngredient10}</li> */}
                <br></br>
                
                <li><b>Instructions: </b>{randomCocktail.drinks[0].strInstructions}</li>
            </ul>
          
         </div>
     )
    }

export default CocktailCard



// // {
// //     "drinks": [
// //         {
// Id            "idDrink": "14842",
// Name           "strDrink": "Midnight Mint",
// //             "strDrinkAlternate": null,
// //             "strDrinkES": null,
// //             "strDrinkDE": null,
// //             "strDrinkFR": null,
// //             "strDrinkZH-HANS": null,
// //             "strDrinkZH-HANT": null,
// //             "strTags": null,
// //             "strVideo": null,
// Category             "strCategory": "Cocktail",
// //             "strIBA": null,
// Alch or Non Alch             "strAlcoholic": "Alcoholic",
// //             "strGlass": "Cocktail glass",
// Instructions             "strInstructions": "If available, rim cocktail (Martini) glass with sugar syrup then dip into chocolate flakes or powder. Add ingredients into shaker with ice. Shake well then strain into cocktail glass.",
// //             "strInstructionsES": null,
// //             "strInstructionsDE": "Wenn verfügbar, Cocktailglas (Martini) mit Zuckersirup, dann in Schokoladenflocken oder Pulver eintauchen. Zutaten in den Shaker mit Eis geben. Gut schütteln und dann in ein Cocktailglas abseihen.",
// //             "strInstructionsFR": null,
// //             "strInstructionsZH-HANS": null,
// //             "strInstructionsZH-HANT": null,
// Img             "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/svuvrq1441208310.jpg",
//             "strIngredient1": "Baileys irish cream",
//             "strIngredient2": "White Creme de Menthe",
//             "strIngredient3": "Cream",
//             "strIngredient4": null,
//             "strIngredient5": null,
//             "strIngredient6": null,
//             "strIngredient7": null,
//             "strIngredient8": null,
//             "strIngredient9": null,
//             "strIngredient10": null,
//             "strIngredient11": null,
//             "strIngredient12": null,
//             "strIngredient13": null,
//             "strIngredient14": null,
//             "strIngredient15": null,
//             "strMeasure1": "1 oz ",
//             "strMeasure2": "3/4 oz ",
//             "strMeasure3": "3/4 oz double ",
//             "strMeasure4": null,
//             "strMeasure5": null,
//             "strMeasure6": null,
//             "strMeasure7": null,
//             "strMeasure8": null,
//             "strMeasure9": null,
//             "strMeasure10": null,
//             "strMeasure11": null,
//             "strMeasure12": null,
//             "strMeasure13": null,
//             "strMeasure14": null,
//             "strMeasure15": null,
// //             "strCreativeCommonsConfirmed": "No",
// //             "dateModified": "2015-09-02 16:38:30"
// //         }
// //     ]
// // }