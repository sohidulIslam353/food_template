//LANGUAGE TOGGLE
(function($) {
    $("#lanId").click(function() {
        $(".language").toggleClass("active");
    });
})(jQuery);

// FOR NAVBAR FIXED WHEN SCROLL
$(window).on("scroll", function() {
    var scrolling = $(this).scrollTop();
    if (scrolling > 50) {
        $(".header-bottom").addClass("navbar-fixed");
    } else {
        $(".header-bottom").removeClass("navbar-fixed");
    }
});


//MOBILE MENU

(function($) {
    $(".hambarger").click(function() {
        $(this).toggleClass("open")
        $(".menu-main").toggleClass("active")
    });
})(jQuery);

//MOBLE FOOTER MENU MOBILE APP FOOTER
$(document).on('click', '.menus li', function() {
    $(this).addClass('active-icon').siblings().removeClass('active-icon')
})


//HOME SLIDER PARALLEX
document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move) {

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}


// ======================================================
//             PAGE LODER JS
// ======================================================

setTimeout(function() {
    document.getElementById("spinner__wrapper").style.display = "none";
}, 3000);
// ======================================================
//             PAGE LODER JS END
// ======================================================


// ======================================================
//             LOGIN/RAG END JS
// ======================================================
//HOME CATEGORY SLIDER START
$('.baner-slider').owlCarousel({
    loop: true,
    // autoplay: true,
    margin: 10,
    nav: false,
    dots: false,
    responsiveClass: true,
    // dragEndSpeed: 2000,

    responsive: {
        0: {
            items: 2,
            nav: false
        },
        600: {
            items: 4,
            nav: false
        },
        1000: {
            items: 8,
            nav: false,
            loop: true,
        }
    }
})

// HOME CATEGORY SLIDER END

//CHEFC SLIDER START
$('.chefc-slider').owlCarousel({
    loop: true,
    // autoplay: true,
    margin: 10,
    nav: false,
    dots: false,
    responsiveClass: true,
    // dragEndSpeed: 2000,

    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 4,
            nav: false,
            loop: true,
        }
    }
})

// CHEFC SLIDER END


//CLIENT SLIDER START
$('.client-reviews').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 10,
    nav: false,
    dots: false,
    responsiveClass: true,

    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false,
            loop: true,
        }
    }
})

// CLIENT SLIDER END


//CLIENT SLIDER START
$('.releted-product').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: false,
    responsiveClass: true,

    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: false,
            loop: true,
        }
    }
})

// CLIENT SLIDER END

//PARALLEX  JS ARE HERE====

let fd_1 = document.getElementById("top-recipes-top");
let fd_2 = document.getElementById("top-recipes-left");
let fd_4 = document.getElementById("paralex-pd");
let fd_3 = document.getElementById("paralex-pd-tow");
let fd_5 = document.getElementById("paralex-pd-there");
let fd_6 = document.getElementById("paralex-pd-for");
window.addEventListener('scroll', function() {
    var value = window.scrollY;
    fd_1.style.top = -value * 0.2 + 'px';
    fd_2.style.left = value * 0.1 + 'px';
    fd_3.style.top = value * 0.2 + 'px';
    fd_4.style.top = -value * 0.2 + 'px';
    fd_5.style.left = value * 0.2 + 'px';
    fd_6.style.left = value * 0.2 + 'px';
})




// ==================================discount date count =============
var now = new Date();
var day = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear() + 1;

var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

$('#example').countdown({
    date: nextyear, // TODO Date format: 07/27/2017 17:00:00
    offset: +2, // TODO Your Timezone Offset
    day: 'Day',
    days: 'Days',
    hideOnComplete: true
}, function(container) {
    alert('Done!');
});


//SINGLE PRODUCT PAGE  QUANTITY RANGEJS
var QtyInput = (function() {
    var $qtyInputs = $(".quantity");

    if (!$qtyInputs.length) {
        return;
    }

    var $inputs = $qtyInputs.find(".product-qty");
    var $countBtn = $qtyInputs.find(".qty-count");
    var qtyMin = parseInt($inputs.attr("min"));
    var qtyMax = parseInt($inputs.attr("max"));

    $inputs.change(function() {
        var $this = $(this);
        var $minusBtn = $this.siblings(".qty-count--minus");
        var $addBtn = $this.siblings(".qty-count--add");
        var qty = parseInt($this.val());

        if (isNaN(qty) || qty <= qtyMin) {
            $this.val(qtyMin);
            $minusBtn.attr("disabled", true);
        } else {
            $minusBtn.attr("disabled", false);

            if (qty >= qtyMax) {
                $this.val(qtyMax);
                $addBtn.attr('disabled', true);
            } else {
                $this.val(qty);
                $addBtn.attr('disabled', false);
            }
        }
    });

    $countBtn.click(function() {
        var operator = this.dataset.action;
        var $this = $(this);
        var $input = $this.siblings(".product-qty");
        var qty = parseInt($input.val());

        if (operator == "add") {
            qty += 1;
            if (qty >= qtyMin + 1) {
                $this.siblings(".qty-count--minus").attr("disabled", false);
            }

            if (qty >= qtyMax) {
                $this.attr("disabled", true);
            }
        } else {
            qty = qty <= qtyMin ? qtyMin : (qty -= 1);

            if (qty == qtyMin) {
                $this.attr("disabled", true);
            }

            if (qty < qtyMax) {
                $this.siblings(".qty-count--add").attr("disabled", false);
            }
        }

        $input.val(qty);
    });
})();



// ===========================PRODUCT VIEW IMAGE LODING ============
$(window).load(function() {
    $('.sp-wrap').smoothproducts();
});

// ==============datepic=============
$(document).ready(function() {
    $('.timepicker').mdtimepicker();
});


// ======================================================
//             LOGIN/RAG JS
// ======================================================
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container__1");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});