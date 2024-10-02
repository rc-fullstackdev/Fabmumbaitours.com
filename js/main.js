(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// Testmonials Section Start

document.addEventListener('DOMContentLoaded', function () {
    var paragraphs = document.querySelectorAll('.read-more-paragraph');
    var buttons = document.querySelectorAll('.read-more-button');
  
    buttons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            // Toggle the 'read-more' class on the corresponding paragraph
            paragraphs[index].classList.toggle('read-more');
  
            // Change the button text based on the paragraph's state
            var buttonText = paragraphs[index].classList.contains('read-more') ? 'Read Less' : 'Read More';
            button.textContent = buttonText;
        });
    });
  });
  
  // Testmonials Section End


  // FAQ Section Start

$(".question-wrapper").click( function () {
    var container = $(this).parents(".accordion");
    var answer = container.find(".answer-wrapper");
    var trigger = container.find(".material-icons.drop");
      var state = container.find(".question-wrapper");
    
    answer.animate({height: "toggle"}, 100);
    
    if (trigger.hasClass("icon-expend")) {
      trigger.removeClass("icon-expend");
          // state.removeClass("active");
    }
    else {
      trigger.addClass("icon-expend");
          // state.addClass("active");
    }
    
    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    }
    else {
      container.addClass("expanded");
    }
  });