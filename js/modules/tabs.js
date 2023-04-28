export const tabs = () => {
  const commandsButtonBio = document.querySelectorAll(".command__button-bio");
  const commandsButtonHid = document.querySelectorAll(".command__button-hid");
  const commandItems = document.querySelectorAll(".command__item");

  const commandButtonHandler = (objectFirstBtn, selectorSecondBtn) => {
    objectFirstBtn.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const commandItem = event.target.closest(".command__item");
        const selectorSecond = commandItem.querySelector(
          "." + selectorSecondBtn
        );
        commandsButtonHid.forEach(but=>but.classList.add('hidden'))
        commandsButtonBio.forEach(but=>but.classList.remove('hidden'))
        if (commandItem.classList.contains("active")) {
          commandItems.forEach((item) => item.classList.remove("active"));
          
        } else {
          commandItems.forEach((item) => item.classList.remove("active"));
          commandItem.classList.add("active");
          btn.classList.add("hidden");
          selectorSecond.classList.remove("hidden");
        }
      });
    });
  };
  commandButtonHandler(commandsButtonBio, "command__button-hid");
  commandButtonHandler(commandsButtonHid, "command__button-bio");
};
