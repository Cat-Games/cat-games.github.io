// Function to toggle dropdown visibility
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

// Function to handle dropdown item click
function handleDropdownClick(event) {
    event.preventDefault(); // Prevent the default anchor action

    const action = event.target.getAttribute('data-action');

    switch(action) {
        case 'action1':
            performAction1();
            break;
        case 'action2':
            performAction2();
            break;
        case 'action3':
            performAction3();
            break;
        default:
            console.log('Unknown action');
    }

    // Close dropdown after selection
    document.querySelector('.dropdown').classList.remove('show');
}

// Example actions
function performAction1() {
    document.body.classList.toggle('metro');
    console.log('Option 1 selected');
}

function performAction2() {
    document.body.classList.toggle('modern');
    console.log('Option 2 selected');
}

function performAction3() {
    console.log('Option 3 selected');
}

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


// Add event listeners to dropdown items
document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', handleDropdownClick);
});

// Close dropdown when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(dropdown) {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            }
        });
    }
};
