export const scroll = () => {
  const headerNav = document.querySelector(".header__nav");
  const navLink = headerNav.querySelectorAll("a");

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
    });
  });
};
