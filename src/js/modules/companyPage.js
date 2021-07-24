import { cardsWrapper } from '../services/cardRender';
import { arrayCompany } from './showCards';
import Company from '../services/companyRender';
import { pushHistoryLogo } from './logoHistory';

function companyPage() {

    cardsWrapper.addEventListener('click', function (event) {

        event.preventDefault();
        const search = document.querySelector('.search'),
            cards = document.querySelector('.cards');

        //создаем переход на описание компании, делегирование
        if (event.target.getAttribute('data-link') == '') {
            search.style.display = 'none';
            cards.style.display = 'none';

            let link = event.target.getAttribute('href'),
                company;
            history.pushState({ id: link }, '');

            arrayCompany.filter(item => {
                if (item.id == link) {
                    company = item;
                }
            });
            let { id, color, location, logo, name, position, schedule, date, descr, site } = company;
            new Company(id, color, location, logo, name, position, schedule, date, descr, site).render();

            pushHistoryLogo();
        }
    });
}

export { companyPage };