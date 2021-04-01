import $ from "jquery";
document.querySelectorAll('.mobile-nav').forEach(el => {
    el.childNodes[0].addEventListener('click', () => {
        if (document.documentElement.clientWidth <= 1200) {
            document.querySelector('.header__menu-box').classList.toggle("mobile-nav_active");
            document.querySelector('.header__coating').classList.toggle("header__coating_active");
        } else {
            return;
        }

    });
})