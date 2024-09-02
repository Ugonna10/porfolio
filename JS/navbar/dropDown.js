import { headerSelectBtn, headerDropdownMenu } from '../globals.js';

export function toggleDropdownOnHeaderClick() {
    // Toggle the dropdown menu when the header select button is clicked
    headerSelectBtn.addEventListener('click', () => {
        headerSelectBtn.classList.toggle('active');
        headerDropdownMenu.classList.toggle('open');
    });
}

