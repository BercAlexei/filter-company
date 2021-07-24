'use strict';

import theme from './modules/theme';
import { showCards } from './modules/showCards';
import { companyPage } from './modules/companyPage';
import { reload } from './modules/reload';
import { replaceHistoryLogo } from './modules/logoHistory';

document.addEventListener('DOMContentLoaded', () => {
        replaceHistoryLogo();
        theme();
        showCards();
        companyPage();
        reload();
});