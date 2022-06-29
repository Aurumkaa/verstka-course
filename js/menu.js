$(document).ready(function () {
    var acc = document.getElementsByClassName("burgermenu__accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    function burgerMenu(selector) {
      let menu = $(selector);
      let button = menu.find(".burgermenu__button", ".burgermenu__lines");
      let links = menu.find(".menu-list__submenu a");
      let overlay = menu.find(".burgermenu__overlay");

      button.on("click", (e) => {
        e.preventDefault();
        toggleMenu();
      });

      links.on("click", () => toggleMenu());
      overlay.on("click", () => toggleMenu());

      function toggleMenu() {
        menu.toggleClass("burgermenu_active");

        if (menu.hasClass("burgermenu_active")) {
          $("body").css("overlow", "hidden");
        } else {
          $("body").css("overlow", "visible");
        }
      }
    }

    burgerMenu(".burgermenu");
  });