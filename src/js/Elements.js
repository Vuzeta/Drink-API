import {
    getDrinksArray,
    getDrinksFromArray
} from "./app.js";

export const Elements = {
    counterElements: 0,
    inputSearch: document.querySelector('.search-drink'),
    buttonSearch: document.querySelector('.search-button'),
    drinkList: document.querySelector('.list-of-drinks'),
    errorPrint: document.querySelector('.error')
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