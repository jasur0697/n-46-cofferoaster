var elOpenMenu = document.querySelector(".site-header");
var siteNavButton = elOpenMenu.querySelector(".site-header__button");


if (siteNavButton) {
    siteNavButton.addEventListener("click", function () {
        elOpenMenu.classList.toggle("site-header--open");
    })
};