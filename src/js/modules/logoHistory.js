const logoLink = document.querySelector('.logo a');
// перезаписываем функцию клика по логотипу
function pushHistoryLogo() {
    logoLink.onclick = event => {
        event.preventDefault();
        history.pushState(null, null);

        const search = document.querySelector('.search'),
            cards = document.querySelector('.cards'),
            company = document.querySelector('.company');

        company.innerHTML = '';
        search.style.display = 'grid';
        cards.style.display = 'block';
        replaceHistoryLogo();
    };
}

function replaceHistoryLogo() {
    logoLink.onclick = event => {
        event.preventDefault();
        history.replaceState(null, null);

        const search = document.querySelector('.search'),
            cards = document.querySelector('.cards'),
            company = document.querySelector('.company');

        company.innerHTML = '';
        search.style.display = 'grid';
        cards.style.display = 'block';
    };
}

export { pushHistoryLogo, replaceHistoryLogo };