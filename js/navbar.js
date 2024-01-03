document.addEventListener("DOMContentLoaded", function () {
    var hamburgerIcon = document.getElementById("hamburgerIcon");
    var dropdownMenu = document.getElementById("dropdownMenu");
    var requestDemoButton = document.querySelector('.RequestADemo');
    var solutionsDropdown = document.getElementById("solutionsDropdown");
    var customersDropdown = document.getElementById("customersDropdown");
    var resourcesDropdown = document.getElementById("resourcesDropdown");
    var aboutDropdown = document.getElementById("aboutDropdown");
    var platformDropdown = document.getElementById("platformDropdown");

    function toggleDropdown(dropdownElement) {
        // Close other dropdowns
        [solutionsDropdown, customersDropdown, resourcesDropdown, platformDropdown, aboutDropdown].forEach(function (dropdown) {
            if (dropdown !== dropdownElement) {
                dropdown.style.display = "none";
            }
        });

        // Toggle the display of the selected dropdown
        dropdownElement.style.display = dropdownElement.style.display === "none" ? "flex" : "none";
    }

    hamburgerIcon.addEventListener("click", function () {
        // Toggle the display of the main navigation menu
        dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "flex" : "none";

        // Hide dropdowns when main navigation is displayed
        [solutionsDropdown, customersDropdown, resourcesDropdown, platformDropdown, aboutDropdown].forEach(function (dropdown) {
            dropdown.style.display = "none";
        });
    });

    var dropdownToggle = document.getElementById("dropdownToggle");

    dropdownToggle.addEventListener("click", function () {
        // Toggle the display of the main navigation menu
        dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "flex" : "none";

        // Hide dropdowns when main navigation is displayed
        [solutionsDropdown, customersDropdown, resourcesDropdown, platformDropdown, aboutDropdown].forEach(function (dropdown) {
            dropdown.style.display = "none";
        });
    });

    // Check the screen width and add/remove class for the Request a Demo button
    function checkScreenWidth() {
        if (window.innerWidth <= 960) {
            // For mobile view, move the button into the dropdown
            requestDemoButton.classList.remove('desktop-only');
        } else {
            // For desktop view, move the button outside the dropdown
            requestDemoButton.classList.add('desktop-only');

            // Close the dropdown when screen size is beyond 960px
            dropdownMenu.style.display = "none";
        }
    }

    // Check on page load
    checkScreenWidth();

    // Check on window resize
    window.addEventListener('resize', function () {
        checkScreenWidth();

        // Close all dropdowns on window resize
        [solutionsDropdown, customersDropdown, resourcesDropdown, platformDropdown, aboutDropdown].forEach(function (dropdown) {
            dropdown.style.display = "none";
        });
    });

    // Event listeners for Solutions dropdown
    document.querySelector('.Solutions').addEventListener('click', function () {
        toggleDropdown(solutionsDropdown);
    });

    // Event listeners for Customers dropdown
    document.querySelector('.Customers').addEventListener('click', function () {
        toggleDropdown(customersDropdown);
    });

    // Event listeners for Resources dropdown
    document.querySelector('.Resources').addEventListener('click', function () {
        toggleDropdown(resourcesDropdown);
    });

    // Event listeners for Platform dropdown
    document.querySelector('.Platform').addEventListener('click', function () {
        toggleDropdown(platformDropdown);
    });

    // Event listeners for About dropdown
    document.querySelector('.About').addEventListener('click', function () {
        toggleDropdown(aboutDropdown);
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav-link')) {
            [solutionsDropdown, customersDropdown, resourcesDropdown, platformDropdown, aboutDropdown].forEach(function (dropdown) {
                dropdown.style.display = "none";
            });
        }
    });

    // Close dropdowns on window resize
    window.addEventListener('resize', function () {
        [solutionsDropdown, customersDropdown, resourcesDropdown, platformDropdown, aboutDropdown].forEach(function (dropdown) {
            dropdown.style.display = "none";
        });
    });
});
