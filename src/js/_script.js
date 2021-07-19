'use strict';

import theme from './modules/theme';
import { showCards } from './modules/showCards';
import { companyPage } from './modules/companyPage';
import { reload } from './modules/reload';

document.addEventListener('DOMContentLoaded', () => {
        theme();
        showCards();
        companyPage();
        reload();
});