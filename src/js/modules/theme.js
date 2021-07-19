export default function theme() {
    const root = document.querySelector(':root'),
        checkTheme = document.querySelector('#theme');

    function setNewVarCss(bgColor, cardColor, textColor, checkboxColor, buttonColorActive, buttonColorNotActive,btnSiteCompanyTextColor) {
        root.style.setProperty('--bg', bgColor);
        root.style.setProperty('--card_color', cardColor);
        root.style.setProperty('--text_color', textColor);
        root.style.setProperty('--bg_checkbox', checkboxColor);
        root.style.setProperty('--btn_site_company', buttonColorActive);
        root.style.setProperty('--btn_site_company_active', buttonColorNotActive);
        root.style.setProperty('--btn_site_company_text_color', btnSiteCompanyTextColor);
    }

    function themeChenge() {
        if (localStorage.getItem('theme') === 'light') {
            setNewVarCss('#F4F6F8', 'white', '#19202D', 'rgba(25, 32, 45, .1)', 'rgba(89, 100, 224, .1)', 'rgba(89, 100, 224, .35)', '#5964E0');
        }

        if (localStorage.getItem('theme') === 'dark') {
            checkTheme.checked = true;
            setNewVarCss('#121721', '#19202D', '#FFFFFF', 'rgba(255, 255, 255, .1)', 'rgba(255, 255, 255, .1)', 'rgba(255, 255, 255, .35)', 'white');
        }
    }

    themeChenge();

    checkTheme.addEventListener('click', () => {
        checkTheme.classList.add('active');
        if (checkTheme.checked) {
            localStorage.setItem('theme', 'dark');
            themeChenge();
        } else {
            localStorage.setItem('theme', 'light');
            themeChenge();
        }
    });
}