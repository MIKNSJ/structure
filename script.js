var enableStickyHeader = false;
var hideHeader = false;
var scrollPosY = 0;

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

    if (window.scrollY > 75) {
        if (!enableStickyHeader) {
            header.classList.toggle("enable_sticky_header");
            console.log("The header has now disappeared.");
            enableStickyHeader = true;
            nav_bar_options.style.backgroundColor = "#FAF9F6";
        }

        if (window.scrollY > 500) {
            if (window.scrollY < scrollPosY) {
                if (hideHeader) {
                    if (header.classList.contains("hide_header")) {
                        header.classList.remove("hide_header");
                    }

                    if (nav_bar_options.classList.contains("hide_nav_bar_options")) {
                        nav_bar_options.classList.remove("hide_nav_bar_options");
                    }
                }

                hideHeader = false;
                /* console.log("scroll-up"); */
            } else {
                if (!hideHeader) {
                    header.classList.toggle("hide_header");
                    nav_bar_options.classList.toggle("hide_nav_bar_options");
                }
                hideHeader = true;
                /* console.log("scroll-down"); */
            }
        }
    } else {
        if (header.classList.contains("enable_sticky_header")) {
            header.classList.remove("enable_sticky_header");
        }
        enableStickyHeader = false;
        nav_bar_options.style.backgroundColor = "white";
    }

    scrollPosY = window.scrollY;
}
