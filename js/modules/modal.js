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
      document.body.classList.remove('body-locked')
    });
    modalInner.appendChild(div);
  }
  //   ---------------------------
  buttons.forEach((item) => {
    item.addEventListener("click", () => {
      modal.classList.toggle("active");
      document.body.classList.add('body-locked')
    });
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".modal__inner")) {
      modal.classList.toggle("active");
    document.body.classList.remove('body-locked')

    }
  });

  closeBtn();
};
