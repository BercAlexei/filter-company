import { cardsWrapper } from "../services/cardRender";
import { showCards } from "./showCards";

const logoLink = document.querySelector('.logo a'),
      spinner = document.querySelector('.spinner'),
      forms = document.querySelectorAll('form'),
      search = document.querySelector('.search'),
      cards = document.querySelector('.cards'),
      company = document.querySelector('.company');

// перезаписываем функцию клика по логотипу
function pushHistoryLogo() {
    logoLink.onclick = event => {
        event.preventDefault();
        history.pushState(null, null);
        company.innerHTML = '';
        search.style.display = 'grid';
        cards.style.display = 'block';
        cardsWrapper.innerHTML = '';
        spinner.style.display = 'block';
        forms.forEach(item => {
            item.reset();
        });
        showCards();
        replaceHistoryLogo();
    };
}

function replaceHistoryLogo() {
    logoLink.onclick = event => {
        event.preventDefault();
        history.replaceState(null, null);
        spinner.style.display = 'block';
        cardsWrapper.innerHTML = '';
        forms.forEach(item => {
            item.reset();
        });
        showCards();
    };
}

export { pushHistoryLogo, replaceHistoryLogo };