function responsiveNess() {
  const side_menu = document.querySelector("#side-menu");
  // const closeSideMenu = document.querySelector("#close");

  side_menu.addEventListener("click", (event) => {
    // console.log(event);
    const mainLogo = document.querySelector(".news-logo");
    const sideMenuLogo = document.querySelector(".logo_new>img");
    // const menu = document.querySelector("#displayMenu");
    const menu = event.target.nextElementSibling;
    const closeBtn =
      event.target.parentNode.childNodes[3].childNodes[1].childNodes[3];

    sideMenuLogo.classList.add("fadeIn");
    mainLogo.classList.add("fadeOut");
    menu.style.display = "block";
    menu.style.left = "0";

    closeBtn.onclick = () => {
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
      // setTimeout(() => {
      //     mainLogo.classList.remove("fadeIn");
      // }, 2000)
    };
  });
}

export default responsiveNess;
