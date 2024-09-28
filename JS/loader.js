import { pageLoader } from './globals.js';

export function hidePageLoaderOnPageLoad() {
    window.addEventListener('load', () => {
        pageLoader.classList.add('hide-loader');
        document.body.classList.remove('no-scroll');
    });
}
