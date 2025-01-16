import { $ } from "../scritp";
const $$ = (selector) => document.querySelectorAll(selector);
// // Estoy seleccionando los numeros de los inputs
const $inputs = $$("[data-input]");
const $inputs1 = $$("[data-input1]");
const $inputsTa2 = $$("[data-inputable]");
const $inputs1Ta2 = $$("[data-inputable1]");
// inputs de U expandida
const $inputsU = $$("[data-inputU]");
const $inputsUtable2 = $$("[data-inputableU]");

export const inputsArray = [...$inputs];
export const inputsArray1 = [...$inputs1];

export const inTableArray = [...$inputsTa2];
export const in2TableArray = [...$inputs1Ta2];

export const inputsUArray = [...$inputsU];
export const inputsUTableArray = [...$inputsUtable2];
