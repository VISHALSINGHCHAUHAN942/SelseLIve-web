document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.carousel');
    var slides = document.querySelectorAll('.slide');
    var currentIndex = 0;
 
    function showNextSlide() {
       slides[currentIndex].style.display = 'none';
       currentIndex = (currentIndex + 1) % slides.length;
       slides[currentIndex].style.display = 'block';
    }
 
    setInterval(showNextSlide, 10000); // Change 5000 to the desired time interval in milliseconds (e.g., 5000 for 5 seconds)
 });