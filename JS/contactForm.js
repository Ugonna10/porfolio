const form = document.querySelector('.contact__form');
const formSubmitStatusBox = document.querySelector('.contact__submit-status-box');
const tickSvgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="green" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/></svg>`;
const cancelSvgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="red" d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"/></svg>`;


export function submitForm() {
    form.addEventListener('submit', e => {
        e.preventDefault();

        // Get values of the form fields
        const name = document.querySelector('#contact-name').value;
        const email = document.querySelector('#contact-email').value;
        const message = document.querySelector('#contact-message').value;

        // Send form data
        fetch("https://formsubmit.co/ajax/4434c9727603c291fe9ff807e5ea6165", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
            .then(response => response.json())
            .then(() => {
                showMessage('Form submitted successfully', 'success');
                resetFormFields();
            })
            
            .catch(() => {
                showMessage('Error submitting form. Please try again', 'error');
            });
    });
}

// Function to reset form fields
function resetFormFields() {
    document.querySelector('#contact-name').value = "";
    document.querySelector('#contact-email').value = "";
    document.querySelector('#contact-message').value = "";
}

// Function to create and display message elements
function showMessage(text, type) {
    const messageElement = document.createElement('div');
    messageElement.className = `contact__submit-status ${type}`;
    const span = document.createElement('span');
    span.textContent = text;
    if (type == 'success'){
        messageElement.innerHTML = `${tickSvgMarkup} ${span.outerHTML}`;
    } else if (type == 'error') {
        messageElement.innerHTML = `${cancelSvgMarkup} ${span.outerHTML}`;
    }

    formSubmitStatusBox.appendChild(messageElement);

    setTimeout(() => {
        messageElement.remove();
    }, 3000);
}
