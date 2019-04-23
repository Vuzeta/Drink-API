import {
    checkSelectEngine
} from "./searchEngine.js";

export const Elements = {
    counterElements: 0,
    inputSearch: document.querySelector('.search-drink'),
    buttonSearch: document.querySelector('.search-button'),
    drinkList: document.querySelector('.list-of-drinks'),
    errorPrint: document.querySelector('.error-handler'),
    searchEngine: document.querySelector('.select-search-engine')
};

Elements.inputSearch.addEventListener('keypress', function (e) {
    Elements.counterElements = 0;
    if (e.keyCode == 13) {
        if (!Elements.inputSearch.value.replace(/\s/g, '').length) {
            Elements.errorPrint.style.display = 'block';
            Elements.errorPrint.textContent = 'String only contains whitespace (ie. spaces, tabs or line breaks)';
            Elements.inputSearch.value = '';
        } else {
            checkSelectEngine(Elements.searchEngine.options.selectedIndex);
        };
    }
});

Elements.buttonSearch.addEventListener('click', function () {
    Elements.counterElements = 0;
    if (!Elements.inputSearch.value.replace(/\s/g, '').length) {
        Elements.errorPrint.style.display = 'block';
        Elements.errorPrint.textContent = 'String only contains whitespace (ie. spaces, tabs or line breaks)';
        Elements.inputSearch.value = '';
    } else {
        checkSelectEngine(Elements.searchEngine.options.selectedIndex);
    };
});

Elements.inputSearch.addEventListener('click', function () {
    this.placeholder = '';
});

Elements.inputSearch.addEventListener('blur', function () {
    this.placeholder = 'Example: gin';
});