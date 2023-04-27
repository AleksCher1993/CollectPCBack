export const modal = (...selectors) => {
  const modal = document.querySelector(".modal");
  const modalInner = modal.querySelector(".modal__inner");
  const buttons = [...selectors];
  // --------------------------
  function closeBtn() {
    let div = document.createElement("div");
    div.classList.add("modal__close");
    div.addEventListener("click", () => {
      modal.classList.remove("active");
    });
    modalInner.appendChild(div);
  }
  //   ---------------------------
  buttons.forEach((item) => {
    item.addEventListener("click", () => {
      modal.classList.toggle("active");
    });
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".modal__inner")) {
      modal.classList.toggle("active");
    }
  });

  closeBtn();
};
