import { Card } from "./cardRender";
//рендер описания компании
export default class Company extends Card {
    constructor(id, color, location, logo, name, position, schedule, date, descr, site) {
        super(id, color, location, logo, name, position, schedule, date );
        this.descr = descr;
        this.site = site;
    }
    render() {
        const company = document.querySelector('.company');
        company.innerHTML = `
        <div class="container">
            <div class="company__header">
                <div class="company__header-logo" style="background-color: ${this.color};">
                    <img src=${this.logo} alt="logo">
                </div>
                <div class="company__header-content">
                    <div class="company__header-content-text">
                        <div class="company__name">
                            ${this.name}
                        </div>
                        <div class="company__site">
                            ${this.site}
                        </div>
                    </div>
                    <a class="btn btn_dimly" href="https://www.google.com/">
                        Company Site
                    </a>
                </div>
            </div>
            <div class="company__content">
                <div class="company__content-header">
                    <div class="company__content-descr">
                        <div class="company__content-date">
                        ${this.date}<span>${this.schedule}</span>
                        </div>
                        <div class="company__content-position">
                            ${this.position}
                        </div>
                        <div class="company__content-location">
                            ${this.location}
                        </div>
                    </div>
                    <button class="btn btn__company">Apply Now</button>
                </div>
                <div class="company__text">
                    ${this.descr}
                </div>
            </div>
        </div>
        <div class="company__footer">
            <div class="container">
                <div class="company__footer-wrapper">
                    <div>
                        <div class="company__footer-position">
                            ${this.position}
                        </div>
                        <span>
                            So Digital Inc.
                        </span>
    
                    </div>
                    <button class="btn btn__company btn__company_m0">Apply Now</button>
                </div>
            </div>
        </div>
        `;
    }
}