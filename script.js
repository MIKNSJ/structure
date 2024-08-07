var scrollPosY = 0;
var cooldown = 10;

function clickNavBar() {
    document.getElementById("nav_bar_options").classList.toggle("show_nav_bar_options");
    document.getElementById("nav_button_icon").classList.toggle("change_nav_button_icon");
}

window.onclick = function(event) {
    if (!event.target.matches(".nav__button")) {
        var nav_bar = document.getElementById("nav_bar_options");
        var nav_button = document.getElementById("nav_button_icon")

        if (nav_bar.classList.contains("show_nav_bar_options")) {
            nav_bar.classList.remove("show_nav_bar_options");
        }

        if (nav_button.classList.contains("change_nav_button_icon")) {
            nav_button.classList.remove("change_nav_button_icon");
        }
    }
}

window.onscroll = function() {
    var header = document.getElementsByTagName("header")[0];
    var nav_bar_options = document.getElementById("nav_bar_options");

    if (Math.abs(window.scrollY - scrollPosY > cooldown)) {
        if (scrollPosY > window.scrollY) {
            if (header.classList.contains("hide_header")) {
                header.classList.remove("hide_header");
            }

            if (nav_bar_options.classList.contains("hide_nav_bar_options")) {
                nav_bar_options.classList.remove("hide_nav_bar_options");
            }
            /* console.log("scroll-up"); */
        } else {
            header.classList.toggle("hide_header");
            nav_bar_options.classList.toggle("hide_nav_bar_options");
            /* console.log("scroll-down"); */
        }
    }

    scrollPosY = window.scrollY;

    if (scrollPosY == 0) {
        if (header.classList.contains("hide_header")) {
            header.classList.remove("hide_header");
        }

        if (nav_bar_options.classList.contains("hide_nav_bar_options")) {
            nav_bar_options.classList.remove("hide_nav_bar_options");
        }
        /* console.log("Back at the top of the page."); */
    }
}
