import { hidePageLoaderOnPageLoad } from "./loader.js";
import { toggleMobileMenuOnHamburgerClick, closeMobileMenuOnOutsideClick, closeMobileMenuOnLinkClick } from "./navbar/toggleMenu.js";
import { submitForm } from "./contactForm.js";

hidePageLoaderOnPageLoad();
toggleMobileMenuOnHamburgerClick();
closeMobileMenuOnOutsideClick();
closeMobileMenuOnLinkClick();
submitForm();