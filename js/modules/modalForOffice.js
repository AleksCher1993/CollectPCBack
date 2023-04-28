export const modalForOffice = () => {
  const enterAccountBtn = document.querySelector('[data-head-field="enter"]');
  const exitOAccountBtn = document.querySelector('[data-head-field="exit"]');
  const modalAcc = document.querySelector(".modalAcc");
  const modalInner = modalAcc.querySelector(".modal__inner");
  const adminAcc = {
    login: "admin",
    password: "1234",
  };
  const accObj = {};
  const enterToAccount = () => {
    modalAcc.addEventListener("submit", (event) => {
      event.preventDefault();
      for (const { name, value } of modalAcc.elements) {
        accObj[name] = value;
      }

      if (
        accObj.login === adminAcc.login &&
        accObj.password === adminAcc.password
      ) {
        enterAccountBtn.classList.add("hidden");
        exitOAccountBtn.classList.remove("hidden");
        document.body.classList.remove("body-locked");
        modalAcc.classList.remove("active");
        modalAcc.reset();
        localStorage.setItem("admin", JSON.stringify(accObj));
        alert("Добро пожаловать ADMIN");
      } else {
        alert("Вы не верно ввели данные. Попробуйте снова!");
      }
    });
  };
  const examinationAcc = () => {
    if (localStorage.getItem("admin")) {
      enterAccountBtn.classList.add("hidden");
      exitOAccountBtn.classList.remove("hidden");
    }
  };
  function closeBtn() {
    let div = document.createElement("div");
    div.classList.add("modal__close");
    div.addEventListener("click", () => {
      modalAcc.classList.remove("active");
      document.body.classList.remove("body-locked");
    });
    modalInner.appendChild(div);
  }
  enterAccountBtn.addEventListener("click", () => {
    modalAcc.classList.add("active");
    document.body.classList.add("body-locked");
  });
  exitOAccountBtn.addEventListener("click", () => {
    enterAccountBtn.classList.remove("hidden");
    exitOAccountBtn.classList.add("hidden");
    localStorage.removeItem("admin");
  });
  modalAcc.addEventListener("click", (e) => {
    if (!e.target.closest(".modal__inner")) {
      modalAcc.classList.toggle("active");
      document.body.classList.remove("body-locked");
    }
  });
  closeBtn();
  examinationAcc();
  enterToAccount();
};
