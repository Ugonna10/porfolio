import { hamburger, headerMenu, headerBackdrop } from '../globals.js';

// Helper function to update aria attributes
function updateAriaAttributes(isExpanded) {
    hamburger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    headerMenu.setAttribute('aria-hidden', isExpanded ? 'false' : 'true');
}

// Toggle the mobile navigation menu when the hamburger is clicked
export function toggleMobileMenuOnHamburgerClick() {
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        
        // Toggle classes for visual feedback
        hamburger.classList.toggle('active');
        headerMenu.classList.toggle('open');
        headerBackdrop.classList.toggle('active');
        
        // Update aria attributes
        updateAriaAttributes(!isExpanded);
    });
}

// Close the mobile navigation menu when outside is clicked
export function closeMobileMenuOnOutsideClick() {
    document.addEventListener('click', e => {
        if (!headerMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            headerMenu.classList.remove('open');
            headerBackdrop.classList.remove('active');
            
            // Update aria attributes to closed state
            updateAriaAttributes(false);
        }
    });
}

// Close the mobile navigation menu when a link inside the menu is clicked
export function closeMobileMenuOnLinkClick() {
    headerMenu.addEventListener('click', e => {
        if (e.target.closest('.header__nav-link')) {
            hamburger.classList.remove('active');
            headerMenu.classList.remove('open');
            headerBackdrop.classList.remove('active');
            
            // Update aria attributes to closed state
            updateAriaAttributes(false);
        }
    });
}
