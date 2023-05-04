// start special offers part

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2024 16:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    (document.getElementById("demo").innerHTML = "EXPIRED"),
      (document.getElementById("s-offers-item-1").style.filter = "blur(2px)"),
      document.getElementById("not-expired-s-offer").setAttribute("id","expired-s-offer")
  }
}, 1000);
// End special offers part

// قسمت پروتئین رو اوردم قبل از اولکاروسل اصلی وگرنه ری راید نمیشد
// start protein section
$(document).ready(function () {
  $("#owl-protein").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    // autoplay:true,
    slideBy: 4,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3.5,
      },
      1000: {
        items: 5.5,
      },
    },
  });
});
// end protein section
// start high heels section
$(document).ready(function () {
  $("#owl-high-heels").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    // autoplay:true,
    slideBy: 4,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3.5,
      },
      1000: {
        items: 5.5,
      },
    },
  });
});
// end high heels section

//start best sellers part
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    // autoplay:true,
    slideBy:2,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2.5,
      },
      1000: {
        items: 3.5,
      },
    },
  });
});

//end best sellers part
// start product-single part
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
                   
const popover = new bootstrap.Popover(".popover-dismiss", {
  trigger: "focus",
});
// Instantiate EasyZoom instances
var $easyzoom = $('.easyzoom').easyZoom();

// Get an instance API
var api = $easyzoom.data('easyZoom');
// end product-single part
