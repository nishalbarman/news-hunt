function closeMenu() {
  const menu = document.querySelector("#displayMenu");
  if (menu.style.display == "block") {
    const mainLogo = document.querySelector(".news-logo");
    const sideMenuLogo = document.querySelector(".logo_new>img");
    mainLogo.classList.add("fadeIn");
    mainLogo.classList.remove("fadeOut");
    sideMenuLogo.classList.add("fadeOut");
    menu.classList.add("side-menu-reverse");
    menu.style.left = "-80%";
    setTimeout(() => {
      sideMenuLogo.classList.remove("fadeOut");
      menu.style.display = "none";
      menu.classList.remove("side-menu-reverse");
    }, 400);
  }
}

export default closeMenu;
