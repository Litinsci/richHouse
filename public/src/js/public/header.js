import $ from "jquery";

document.querySelectorAll(".header").forEach(header => {
    header.querySelector(".hamburger").onclick = () => {
        header.querySelector(".hamburger__line-container").querySelector(".hamburger__line:first-child").classList.toggle("hamburger__line_left-active");
        header.querySelector(".hamburger__line-container").querySelector(".hamburger__line:last-child").classList.toggle("hamburger__line_right-active");
        header.querySelector(".hamburger__line_midl").classList.toggle("hamburger__line_none");
        if (document.documentElement.clientWidth <= 1200) {
            document.querySelector('.header__menu-box').classList.toggle("mobile-nav_active");
            document.querySelector('.header__coating').classList.toggle("header__coating_active");
        } else {
            return;
        }

        header.querySelectorAll("li.header__menu-item.droped-menu").forEach(list => {
            list.querySelector('.header__menu-link').onclick = () => {
                let id = Number(list.dataset.id);
                if (document.documentElement.clientWidth <= 1200) {
                    if ($(`.droped-menu__list[data-id='${id}']`).is(":hidden")) {
                        $(`.droped-menu__list[data-id='${id}']`).slideDown("slow");
                    } else {
                        $(`.droped-menu__list[data-id='${id}']`).slideUp("slow");
                    }
                } else {
                    return;
                }
            }

        })
    }

    if (document.documentElement.clientWidth > 1200) {
        header.querySelectorAll("li.header__menu-item.droped-menu").forEach(list => {
            list.querySelector('.header__menu-link').addEventListener("mouseover", () => {
                document.querySelectorAll(`.header__droped-menu-full-scran`).forEach(menu=>{
                    menu.classList.remove("header__droped-menu-full-scran_active");
                });
                let id = list.dataset.fullScreanId;
                if (document.documentElement.clientWidth > 1200) {
                    document.querySelector(`.header__menu.droped-menu__list-full-scran[data-full-screan-id='${id}']`).classList.add(`droped-menu__list-full-scran_active`);
                    document.querySelector(`.header__droped-menu-full-scran[data-full-screan-id='${id}']`).classList.add("header__droped-menu-full-scran_active");
                } else {
                    return;
                }
            });
            list.querySelector('.header__menu-link').addEventListener("mouseout", () => {
                let id = Number(list.dataset.fullScreanId);
                if (document.documentElement.clientWidth > 1200) {
                    document.querySelector(`.header__droped-menu-full-scran[data-full-screan-id='${id}']`).addEventListener("mouseover", () => {
                        document.querySelector(`.header__droped-menu-full-scran[data-full-screan-id='${id}']`).classList.add("header__droped-menu-full-scran_active");
                        document.querySelector(`.header__menu.droped-menu__list-full-scran[data-full-screan-id='${id}']`).classList.add(`droped-menu__list-full-scran_active`);
                    });
                    document.querySelector(`.header__droped-menu-full-scran[data-full-screan-id='${id}']`).addEventListener("mouseout", () => {
                        document.querySelector(`.header__menu.droped-menu__list-full-scran[data-full-screan-id='${id}']`).classList.remove(`droped-menu__list-full-scran_active`);
                        document.querySelector(`.header__droped-menu-full-scran[data-full-screan-id='${id}']`).classList.remove("header__droped-menu-full-scran_active");
                    });
                } else {
                    return;
                }
            });
        })
    } else {
        return
    }
})