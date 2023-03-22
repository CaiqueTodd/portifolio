class MobileNavbar {
    constructor(mobileMenu, navList, navLink) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLink = document.querySelectorAll(navLink);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link._style.animation = "")
            : (link._style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });
      }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks
    }


    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".cabecalho__menu-hamburguer",
    ".cabecalho__lista",
    ".cabecalho__item",
);

mobileNavbar.init();    