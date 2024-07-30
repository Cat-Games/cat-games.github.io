// script.js
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if the user has a preferred color scheme (light/dark)
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set initial mode based on user preference or light mode
    if (prefersDarkMode) {
        body.classList.add("dark-mode");

        darkModeToggle.textContent = "Toggle Light Mode";
    }

    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if(body.classList.contains("dark-mode")){
            darkModeToggle.textContent = "Toggle Light Mode";
        }else{
            darkModeToggle.textContent = "Toggle Dark Mode";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const consentPopup = document.getElementById('cookie-consent-popup');
    const acceptButton = document.getElementById('accept-cookies');

    // Function to check if cookie consent has been given
    function checkCookieConsent() {
        const consent = getCookie('cookieConsent');
        if (!consent) {
            consentPopup.style.display = 'block';
        }
    }

    // Function to set a cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Function to get a cookie by name
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Handle the accept button click
    acceptButton.addEventListener('click', function() {
        setCookie('cookieConsent', 'true', 365); // Cookie valid for 365 days
        consentPopup.style.display = 'none';
    });

    // Check for cookie consent on page load
    checkCookieConsent();
});


