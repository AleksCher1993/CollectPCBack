import { accordion } from "./modules/accordions.js";
import { modal } from "./modules/modal.js";
import { scroll } from "./modules/scroll.js";

accordion();
modal(
  document.querySelector(".course__button"),
  document.querySelector(".modal__button")
);
scroll();
