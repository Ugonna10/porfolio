import { pageLoader } from './globals.js';

export function hidePageLoaderOnPageLoad() {
    window.addEventListener('DOMContentLoaded', () => {
        pageLoader.classList.add('hide-loader');
        document.body.classList.remove('no-scroll');
    });
}
