$(".owl-carousel").owlCarousel({
  loop: true,
  items: 1,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
});

var footer = document.getElementById("footer");
var today = new Date();
var currentYear = today.getFullYear().toString();

footer.innerHTML = `<small>&copy; Copyright ${currentYear},  <span> <a href="https://www.linkedin.com/in/karan-munjani-662813173/">Design  By Karan Munjani</a></span></small> `;
