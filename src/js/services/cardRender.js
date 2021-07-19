const cardsWrapper = document.querySelector('.cards__wrapper');

class Card {
    constructor(id, color, location, logo, name, position, schedule, date) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.color = color;
        this.position = position;
        this.location = location;
        this.schedule = schedule;
        this.date = Math.floor((new Date(Date.now()) - Date.parse(date)) / (1000 * 60 * 60));
        switch(true) {
            case(this.date < 24 && this.date > 0) : {
                this.date = `${this.date}h ago`;
                break;
            }
            case (this.date > 24) : {
                this.date = `${Math.floor((new Date(Date.now()) - Date.parse(date)) / (1000 * 60 * 60 * 24))}d ago`;
                if (this.date.replace(/\D/g, '') > 30) {
                    this.date = `${Math.floor((new Date(Date.now()) - Date.parse(date)) / (1000 * 60 * 60 * 24 * 30))}m ago`;
                }
                break;
            }

            case(this.date >= 0) : {
                this.date = 'Now';
                break;
            }
        }
    }
    render() {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                <div class="card__logo" style="background-color: ${this.color};">
                    <img src=${this.logo} alt="logo">
                </div>
                <div class="card__descr">
                    ${this.date}<span>${this.schedule}</span>
                </div>
                <div class="card__position"><a href="${this.id}" data-link >${this.position}</a></div>
                <div class="card__name">${this.name}</div>
                <div class="card__location">${this.location}</div>
            `;

        cardsWrapper.append(card);
    }
}


export { Card, cardsWrapper };
