import { getResource } from "../services/getResourse";
import { Card, cardsWrapper } from "../services/cardRender";

let arrayCompany;

async function showCards() {
    
    const btnShowMore = document.querySelector('#showMore');
    let countCard= 0,
        cardMax = 12,
        filtrerArr = [];    

    arrayCompany = await getResource('db.json').then(res => res.company);

    arrayCompany.sort(function sortArr(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    btnShowMore.onclick = event => {
        event.preventDefault();
        showCard(arrayCompany);
    };  

    function showCard(arr) {
        for (countCard; countCard < arr.length; countCard++) {
            if (countCard < cardMax) {
                let { id, color, location, logo, name, position, schedule, date } = arr[countCard];
                new Card(id, color, location, logo, name, position, schedule, date).render();
            } else {
                break;
            }
        }
        if (countCard >= arr.length) {
            btnShowMore.style.display = 'none';
        } else {
            btnShowMore.style.display = 'block';
        }
        cardMax += 12;
    }

    showCard(arrayCompany);

    //Filter
    const filterTitle = document.querySelector('#filter'),
        filterLocation = document.querySelector('#location'),
        filterShedule = document.querySelector('#shedule'),
        btnSearch = document.querySelector('#search');

    function notFound() {
        if (filtrerArr.length == 0) {
            let title = document.createElement('h2');
            title.classList.add('title');
            title.textContent = 'Not Found';
            cardsWrapper.append(title);
        }
    }

    btnSearch.addEventListener('click', (event) => {
        event.preventDefault();

        btnShowMore.style.display = '';
        cardsWrapper.innerHTML = '';
        countCard = 0;
        cardMax = 12;

        let fullTime = '',
            filterValue = filterTitle.value.toLowerCase(),
            locationValue = filterLocation.value.toLowerCase();
        
        if (filterShedule.checked) {
            fullTime = 'Full Time';
        }
        function filterTrue() {
            notFound();
            btnShowMore.onclick = event => {
                event.preventDefault();
                showCard(filtrerArr);
            };  
            showCard(filtrerArr);
        }
        switch (true) {

            case (filterShedule.checked && filterLocation.value !== '' && filterTitle.value !== ''):
                filtrerArr = arrayCompany.filter(({ schedule, location, name, position }) => {
                    if (schedule == fullTime && location.toLowerCase() == locationValue && (filterValue == name.toLowerCase() || filterValue == position.toLowerCase())) {
                        return {};
                    }
                });
                filterTrue();
                break;

            case (filterShedule.checked && filterLocation.value !== ''):
                filtrerArr = arrayCompany.filter(({ schedule, location }) => {
                    if (schedule == fullTime && location.toLowerCase() == locationValue) {
                        return {};
                    }
                });
                filterTrue();
                break;

            case (filterShedule.checked && filterTitle.value !== ''):
                filtrerArr = arrayCompany.filter(({ schedule, name, position }) => {
                    if (schedule == fullTime && (filterValue == name.toLowerCase() || filterValue == position.toLowerCase())) {
                        return {};
                    }
                });
                filterTrue();
                break;

            case (filterLocation.value !== '' && filterTitle.value !== ''):
                filtrerArr = arrayCompany.filter(({ location, name, position }) => {
                    if (location.toLowerCase() == locationValue && (filterValue == name.toLowerCase() || filterValue == position.toLowerCase())) {
                        return {};
                    }
                });
                filterTrue();
                break;

            case (filterShedule.checked || filterLocation.value !== '' || filterTitle.value !== ''):
                filtrerArr = arrayCompany.filter(({ schedule, location, name, position }) => {
                    if (schedule == fullTime || location.toLowerCase() == locationValue || filterValue == name.toLowerCase() || filterValue == position.toLowerCase()) {
                        return {};
                    }
                });
                filterTrue();
                break;

            default:
                btnShowMore.onclick = event => {
                    event.preventDefault();
                    showCard(arrayCompany);
                };  
                showCard(arrayCompany);
        }
    });
}

export { showCards, arrayCompany };