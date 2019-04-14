import {
    Elements
} from "./Elements.js";

export class Drink {
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

        spanTitle.textContent = `${++Elements.counter}. `;
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
        else drinkSpanType.style.color = '#cc0000';

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
        let replaceWthiteSpace = ingredient.split(/[ ]+/).join('%20');
        img.setAttribute('src', `https://www.thecocktaildb.com/images/ingredients/${replaceWthiteSpace}-Medium.png`);
        img.setAttribute('width', `150px`);
        parent.appendChild(img);
    };
};