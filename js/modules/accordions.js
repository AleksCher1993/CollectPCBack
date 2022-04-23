export const accordion = () => {
  const title = document.querySelectorAll(".program-line__title");
  const description = document.querySelectorAll(".program-line__descr");

  title.forEach((item) => {
    item.addEventListener("click", (e) => {
      description.forEach((desc) => {
        desc.classList.remove("active");
      });
      let descr = e.target.nextElementSibling;
      descr.classList.toggle("active");
    });
  });
};
