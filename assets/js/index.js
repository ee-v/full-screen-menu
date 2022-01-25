const settings = {
    collapseCLass: 'navbar__btn-menu',
    menuClass: 'nav-menu',
    menuLinkClass: 'nav-menu__link',
    closeClass: 'nav-menu__btn-close',
    showClass: 'show-menu',
    hideClass: 'hide-menu'
}
const showMenu = (menu, settings) => {
    menu.classList.add(settings.showClass);
    menu.classList.remove(settings.hideClass);
}
const hideMenu = (menu, settings) => {
    menu.classList.add(settings.hideClass);
    menu.classList.remove(settings.showClass);
}

const btnOpenMenu = document.querySelector(`.${settings.collapseCLass}`);
const menu = document.querySelector(`.${settings.menuClass}`);
const menuLinks = document.querySelectorAll(`.${settings.menuLinkClass}`);
const btnCloseMenu = document.querySelector(`.${settings.closeClass}`);

btnOpenMenu.addEventListener('click', () => showMenu(menu, settings));

btnCloseMenu.addEventListener('click', () => hideMenu(menu, settings));

menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        hideMenu(menu, settings);
        const target = e.target.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});