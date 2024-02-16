document.addEventListener("DOMContentLoaded", function () {
    // Get the carousel element
    var heroCarousel = document.getElementById("heroCarousel");

    // Pause the carousel on hover
    heroCarousel.addEventListener("mouseenter", function () {
      // Bootstrap 5
      var carousel = new bootstrap.Carousel(heroCarousel);
      carousel.pause();

      // If you are using Bootstrap 4, you can use the following code:
      // $("#heroCarousel").carousel("pause");
    });

    // Resume the carousel when the user stops hovering
    heroCarousel.addEventListener("mouseleave", function () {
      // Bootstrap 5
      var carousel = new bootstrap.Carousel(heroCarousel);
      carousel.cycle();

      // If you are using Bootstrap 4, you can use the following code:
      // $("#heroCarousel").carousel("cycle");
    });
  });