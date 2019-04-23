import {
    Drink as Drink
} from "./Drink.js";
import {
    Elements as Elements
} from "./Elements.js";
import {
    goUp as goUp
} from "./backtotop.js"

// Run when PROD
import "../css/style.css";
import "../css/reset.css";

(goUp());

export const getDrinksByIngredients = (valueFromSearchField) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${valueFromSearchField}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Something wrong with server');
            }
        })
        .then(posts => {
            const arrWithDrinks = [];
            Elements.counter = 0;
            posts.drinks.forEach(drink => {
                arrWithDrinks.push(drink.strDrink);
            });
            getDrinksByIngredientsFromArray(arrWithDrinks);
            Elements.inputSearch.value = '';
        }).catch((error) => {
            if (error == "SyntaxError: Unexpected end of JSON input") {
                Elements.errorPrint.style.display = "block";
                Elements.errorPrint.textContent = `Enter the correct ingredient/drink name`
            } else {
                Elements.errorPrint.style.display = "block";
                Elements.errorPrint.textContent = error;
            }
        });
};

export const getDrinksByIngredientsFromArray = arrWithDrinks => {
    arrWithDrinks.forEach(el => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${el}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(posts => {
                posts.drinks.forEach(drink => {
                    const drinkTitle = drink.strDrink,
                        type = drink.strAlcoholic,
                        instructions = drink.strInstructions,
                        image = drink.strDrinkThumb,
                        ingredients = new Array(drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5, drink.strIngredient6, drink.strIngredient7, drink.strIngredient7, drink.strIngredient8, drink.strIngredient9, drink.strIngredient10, drink.strIngredient11, drink.strIngredient12, drink.strIngredient13, drink.strIngredient14, drink.strIngredient15),
                        measures = new Array(drink.strMeasure1, drink.strMeasure2, drink.strMeasure3, drink.strMeasure4, drink.strMeasure5, drink.strMeasure6, drink.strMeasure7, drink.strMeasure7, drink.strMeasure8, drink.strMeasure9, drink.strMeasure10, drink.strMeasure11, drink.strMeasure12, drink.strMeasure13, drink.strMeasure14, drink.strMeasure15);
                    const newDrink = new Drink(drinkTitle, type, instructions, image, ingredients, measures);
                    newDrink.printDrink();
                });
            });
    });
};

export const getDrinkByName = value => {
    let drinkName = value.split(' ').join('%');
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Something went wrong');
            }
        })
        .then(posts => {
            posts.drinks.forEach(drink => {
                const drinkTitle = drink.strDrink,
                    type = drink.strAlcoholic,
                    instructions = drink.strInstructions,
                    image = drink.strDrinkThumb,
                    ingredients = new Array(drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5, drink.strIngredient6, drink.strIngredient7, drink.strIngredient7, drink.strIngredient8, drink.strIngredient9, drink.strIngredient10, drink.strIngredient11, drink.strIngredient12, drink.strIngredient13, drink.strIngredient14, drink.strIngredient15),
                    measures = new Array(drink.strMeasure1, drink.strMeasure2, drink.strMeasure3, drink.strMeasure4, drink.strMeasure5, drink.strMeasure6, drink.strMeasure7, drink.strMeasure7, drink.strMeasure8, drink.strMeasure9, drink.strMeasure10, drink.strMeasure11, drink.strMeasure12, drink.strMeasure13, drink.strMeasure14, drink.strMeasure15);
                const newDrink = new Drink(drinkTitle, type, instructions, image, ingredients, measures);
                newDrink.printDrink();
            });
        }).catch((error) => {
            if (error == "SyntaxError: Unexpected end of JSON input" || error == "TypeError: Cannot read property 'forEach' of null") {
                Elements.errorPrint.style.display = "block";
                Elements.errorPrint.textContent = `Enter the correct ingredient/drink name`
            } else {
                Elements.errorPrint.style.display = "block";
                Elements.errorPrint.textContent = error;
            }
        });
};