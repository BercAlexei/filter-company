import { arrayCompany } from './showCards';
import Company from './../services/companyRender';

function reload() {
    window.addEventListener('popstate', event => {
        console.log(event.state);
        if (event.state == null) {
            const search = document.querySelector('.search'),
                cards = document.querySelector('.cards'),
                company = document.querySelector('.company');

            company.innerHTML = '';
            search.style.display = 'grid';
            cards.style.display = 'block';
        } else {
            const search = document.querySelector('.search'),
                cards = document.querySelector('.cards');

            search.style.display = 'none';
            cards.style.display = 'none';

            let company;

            arrayCompany.filter(item => {
                if (item.id == event.state.id) {
                    company = item;
                }
            });
            let { id, color, location, logo, name, position, schedule, date, descr, site } = company;
            new Company(id, color, location, logo, name, position, schedule, date, descr, site).render();

        }
    });
}

export { reload };