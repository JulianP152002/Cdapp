import { $ } from "../scritp";

export function ErrorCalibracion(
  numbersArray1,
  numbersArray,
  arrayTa2,
  array2Ta2
) {
  const $container = $("[data-errorcalibra]");
  const $container2 = $("[data-errorcalibra2]");
  const $container3 = $("[data-errorcalibra3]");
  const $container4 = $("[data-errorcalibra4]");

  const indice = numbersArray[0];
  const indice2 = numbersArray[1];
  const indice3 = numbersArray[2];
  const indice4 = numbersArray[3];

  const indice1Ta2 = numbersArray1[0];
  const indice2Ta2 = numbersArray1[1];
  const indice3Ta2 = numbersArray1[2];
  const indice4Ta2 = numbersArray1[3];

  function Operacion(goal = indice, goal2, container) {
    const output = arrayTa2.reduce((prev, curr) => {
      if (Math.abs(curr - goal) < Math.abs(prev - goal)) {
        if (curr + 1 < goal || curr - 1 > goal) {
          return;
        } else {
          return curr;
        }
      } else {
        if (prev + 1 < goal || prev - 1 > goal) {
          return;
        } else {
          return prev;
        }
      }
    });

    const indexOutput = arrayTa2.indexOf(output);

    const result = goal2 - goal;
    const result1 = array2Ta2[indexOutput] - output;

    return result > result1
      ? (container.innerHTML = result)
      : (container.innerHTML = result1);
  }
  Operacion(indice, indice1Ta2, $container);
  Operacion(indice2, indice2Ta2, $container2);
  Operacion(indice3, indice3Ta2, $container3);
  Operacion(indice4, indice4Ta2, $container4);
}
