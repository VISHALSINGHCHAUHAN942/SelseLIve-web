document.addEventListener("DOMContentLoaded", function () {
    var navbarPlaceholder = document.getElementById("navbar-placeholder");

    // Fetch and inject the content of navbar.html
    fetch('../html/navbar.html')
        .then(response => response.text())
        .then(data => {
            navbarPlaceholder.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching navbar:', error);
        });
});
