const Elements = {
    counterElements: 0,
    inputSearch: document.querySelector('.search-drink'),
    buttonSearch: document.querySelector('.search-button'),
    drinkList: document.querySelector('.list-of-drinks'),
    errorPrint: document.querySelector('.error')
};

class Drink {
    constructor(name, type, instructions, image, ingredients, measures) {
        this.name = name;
        this.type = type;
        this.ingredients = [...ingredients];
        this.measures = [...measures];
        this.instructions = instructions
        this.image = image;
    }
    cleanArrFromSpace(arr) {
        let cleanArray = arr.filter(el => {
            return el;
        });
        cleanArray = cleanArray.filter(str => {
            return /\S/.test(str);
        });
        return cleanArray;
    }
    printDrink() {
        const self = this;

        const drinkDiv = document.createElement('div')
        drinkDiv.classList.add('drink');

        const drinkTitle = document.createElement('h1');
        drinkTitle.classList.add('drink-title');

        const spanTitle = document.createElement('span');
        spanTitle.classList.add('span-title');

        spanTitle.textContent = `${++Elements.counter}.`;
        drinkTitle.textContent = this.name;

        const drinkWrapper = document.createElement('div');
        drinkWrapper.classList.add('drink-wrapper');

        const drinkColLeft = document.createElement('div');
        drinkColLeft.classList.add('col-left');

        const drinkImage = document.createElement('img');
        drinkImage.classList.add('drink-image');
        drinkImage.src = this.image;

        const drinkColRight = document.createElement('div');
        drinkColRight.classList.add('col-right');

        const divInstruction = document.createElement('div');
        divInstruction.classList.add('drink-instruction');

        const drinkType = document.createElement('p');
        drinkType.classList.add('drink-type');
        drinkType.textContent = "Type: ";

        const drinkSpanType = document.createElement('span');
        drinkSpanType.classList.add('drink-span-type');
        drinkSpanType.textContent = this.type;

        if (drinkSpanType.textContent == 'Non alcoholic') drinkSpanType.style.color = 'green'
        else drinkSpanType.style.color = 'red';

        const drinkDesc = document.createElement('p');
        drinkDesc.classList.add('drink-desc');
        drinkDesc.textContent = this.instructions;

        const drinkDetails = document.createElement('div');
        drinkDetails.classList.add('drink-details');

        const drinkIngredients = document.createElement('ul');
        drinkIngredients.classList.add('ingredients');

        let cleanArrIngredients = this.cleanArrFromSpace(this.ingredients);
        cleanArrIngredients = cleanArrIngredients.filter(function (item, pos) {
            return cleanArrIngredients.indexOf(item) == pos;
        });

        const cleanArrMeasures = this.cleanArrFromSpace(this.measures);

        cleanArrIngredients.forEach((el, index) => {
            const li = document.createElement('li');
            const measure = document.createElement('p');

            li.classList.add('ingredient');
            li.textContent = el;
            drinkIngredients.appendChild(li);

            measure.classList.add('measure');
            measure.innerHTML = `${cleanArrMeasures[index] != undefined? cleanArrMeasures[index] : "&nbsp;"}`
            li.appendChild(measure);
            self.makeIngredientIcon(el, li);

        });
        Elements.drinkList.appendChild(drinkDiv);
        drinkTitle.prepend(spanTitle);
        drinkDiv.appendChild(drinkTitle);
        drinkDiv.appendChild(drinkWrapper);
        drinkWrapper.appendChild(drinkColLeft);
        drinkColLeft.appendChild(drinkImage);
        drinkWrapper.appendChild(drinkColRight);
        drinkColRight.appendChild(divInstruction);
        divInstruction.appendChild(drinkType);
        drinkType.appendChild(drinkSpanType);
        divInstruction.appendChild(drinkDesc);
        drinkColRight.appendChild(drinkDetails);
        drinkDetails.appendChild(drinkIngredients);
    };
    makeIngredientIcon(ingredient, parent) {
        const img = document.createElement('img')
        // let replaceWthiteSpace = ingredient.split(/[ ,]+/).join('%');
        // img.setAttribute('src', `assets/icons/${ingredient}-Medium.png`);
        let replaceWthiteSpace = ingredient.split(/[ ]+/).join('%20');
        img.setAttribute('src', `https://www.thecocktaildb.com/images/ingredients/${replaceWthiteSpace}-Medium.png`);
        img.setAttribute('width', `150px`);
        parent.appendChild(img);
    };
};

const getDrinksArray = (valueFromSearchField) => {
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
            getDrinksFromArray(arrWithDrinks);
            Elements.inputSearch.value = '';
        }).catch((error) => {
            console.log(`Error logs: : ${error}`);
            Elements.errorPrint.style.display = "block";
        });
};

const getDrinksFromArray = arrWithDrinks => {
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
                        ingredients = new Array(drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5, drink.strIngredient6, drink.strIngredient7, drink.strIngredient7, drink.strIngredient8, drink.strIngredient9, drink.strIngredient10, drink.strIngredient11, drink.strIngredient12, drink.strIngredient13, drink.strIngredient14, drink.strIngredient15);
                    measures = ingredient = new Array(drink.strMeasure1, drink.strMeasure2, drink.strMeasure3, drink.strMeasure4, drink.strMeasure5, drink.strMeasure6, drink.strMeasure7, drink.strMeasure7, drink.strMeasure8, drink.strMeasure9, drink.strMeasure10, drink.strMeasure11, drink.strMeasure12, drink.strMeasure13, drink.strMeasure14, drink.strMeasure15);
                    const newDrink = new Drink(drinkTitle, type, instructions, image, ingredients, measures);
                    newDrink.printDrink();
                });
            });
    });
};

Elements.inputSearch.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        Elements.errorPrint.style.display = 'none';
        Elements.drinkList.textContent = '';
        getDrinksArray(Elements.inputSearch.value);
        this.blur();
    }
});

Elements.buttonSearch.addEventListener('click', function () {
    if (!Elements.inputSearch.value) {
        Elements.errorPrint.style.display = 'block';
    } else {
        Elements.errorPrint.style.display = 'none';
        Elements.drinkList.textContent = '';
        getDrinksArray(Elements.inputSearch.value);
    };
});

Elements.inputSearch.addEventListener('click', function () {
    this.placeholder = '';
});

Elements.inputSearch.addEventListener('blur', function () {
    this.placeholder = 'Example: gin';
});