import { accordion } from "./modules/accordions.js";
import { modal } from "./modules/modal.js";
import { scroll } from "./modules/scroll.js";
import { sendForm } from "./modules/sendForm.js";
import { timer } from "./modules/timer.js";

accordion();
modal(
  document.querySelector(".course__button"),
  document.querySelector(".modal__button")
);
scroll();
timer(`27 april ${new Date().getFullYear()+1}`);
sendForm();
