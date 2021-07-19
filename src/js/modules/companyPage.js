import { cardsWrapper } from '../services/cardRender';
import { arrayCompany, showCards } from './showCards';
import Company from '../services/companyRender';

function companyPage() {

    cardsWrapper.addEventListener('click', function (event) {

        event.preventDefault();
        const search = document.querySelector('.search'),
            cards = document.querySelector('.cards');


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

            const logoLink = document.querySelector('.logo a');

            logoLink.onclick = event => {
                    event.preventDefault();
                    history.pushState(null, null);
                    
                    const search = document.querySelector('.search'),
                        cards = document.querySelector('.cards'),
                        company = document.querySelector('.company');
                        
                    company.innerHTML = '';
                    search.style.display = 'grid';
                    cards.style.display = 'block';
                };
        }
    });
}

export { companyPage };