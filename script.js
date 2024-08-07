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
