import {
    Elements as Elements
} from "./Elements.js";
import {
    getDrinksByIngredients,
    getDrinkByName
} from "./app.js";

export const checkSelectEngine = (index) => {
    if (index == 0) {
        Elements.inputSearch.value = '';
        Elements.errorPrint.style.display = 'block';
        Elements.errorPrint.textContent = 'Select a search category';
        Elements.drinkList.textContent = '';
        Elements.inputSearch.blur();
    } else if (index == 1) {
        Elements.errorPrint.style.display = 'none';
        Elements.drinkList.textContent = '';
        getDrinksByIngredients(Elements.inputSearch.value);
        Elements.inputSearch.blur();
        Elements.inputSearch.value = '';
    } else if (index == 2) {
        Elements.errorPrint.style.display = 'none';
        Elements.drinkList.textContent = '';
        getDrinkByName(Elements.inputSearch.value);
        Elements.inputSearch.blur();
        Elements.inputSearch.value = '';
    }
}