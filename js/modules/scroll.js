export const scroll = () => {
  const headerNav = document.querySelector(".header__nav");
  const navLink = headerNav.querySelectorAll("a");
  const burgerBtn=document.querySelector('.burger')
  const headerMenu=document.querySelector('.header__menu')

  navLink[0].setAttribute("id", "work");
  navLink[1].setAttribute("id", "process");
  navLink[2].setAttribute("id", "command");

  seamless.polyfill();

  navLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let intoView = document.querySelector("." + e.target.getAttribute("id"));
      seamless.scrollIntoView(intoView, {
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
      burgerBtn.classList.toggle('active')
        headerMenu.classList.toggle('active')
    });
  });
};
