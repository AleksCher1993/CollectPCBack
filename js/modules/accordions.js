export const accordion = () => {
  const title = document.querySelectorAll(".program-line__title");
  const description = document.querySelectorAll(".program-line__descr");

  title.forEach((item) => {
    item.addEventListener("click", (e) => {
      description.forEach((desc) => {
        desc.style.height = 0;
      });
      let descr = e.target.nextElementSibling;
      descr.style.transition = "height .3s";
      descr.style.overflow = "hidden";
      descr.style.height = descr.scrollHeight + "px";
    });
  });
};
