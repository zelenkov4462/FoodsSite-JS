"use strict";

require("es6-promise").polyfill();
import "nodelist-foreach-polyfill";

import tabs from "./modules/tabs";
import calc from "./modules/calc";
import cards from "./modules/cards";
import forms from "./modules/forms";
import modal from "./modules/modal";
import slider from "./modules/slider";
import timer from "./modules/timer";
import { showModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => showModal(".modal", modalTimerId),
    50000
  );

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  calc();
  cards();
  forms("form", modalTimerId);
  modal("[data-modal]", ".modal", modalTimerId);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prewArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  timer(".timer", "2022-06-11");
});
