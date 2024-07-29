document.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.querySelector('.dropdown-button');
    var dropdownContent = document.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-button')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});

