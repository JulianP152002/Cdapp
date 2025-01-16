import { ErrorCalibracion } from "./Opacity/ErrorCalibracion";
import { ErrorPointMove } from "./Opacity/ErrorPointMove";
import { ErrorSubtractU } from "./Opacity/ErrorSubtractU";
import { ErrorAddU } from "./Opacity/ErrorAddU";
import { inputsArray } from "./Opacity/Conts";
import { inputsArray1 } from "./Opacity/Conts";
import { inputsUArray } from "./Opacity/Conts";
import { inputsUTableArray } from "./Opacity/Conts";
import { inTableArray } from "./Opacity/Conts";
import { in2TableArray } from "./Opacity/Conts";

export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

// Selecciono los elementos li donde quiero hacer el inner del resultado del html
const $errorlist = $$("[data-Error]");
const $UlistSuma = $$("[data-Usuma]");
const $UlistResta = $$("[data-Uresta]");

const $Ta2errorlist = $$("[data-Ta2Error]");
const $Ta2UlistSuma = $$("[data-Ta2Usuma]");
const $Ta2UlistResta = $$("[data-Ta2Uresta]");

const $btn = $("[data-button]");

// Selecciono los puntos en los cuales voy a graficar el resultado que me de en la casilla de erros
const $point1 = $("[data-point1]");
const $point2 = $("[data-point2]");
const $point3 = $("[data-ponit3]");
const $point4 = $("[data-point4]");
const $Ta2point1 = $("[data-point1Ta2]");
const $Ta2point2 = $("[data-point2Ta2]");
const $Ta2point3 = $("[data-ponit3Ta2]");
const $Ta2point4 = $("[data-point4Ta2]");

// Selecciono las lineas las cuales voy a graficar el resultado que me de en la casilla de E+U Y E-U
const $Ulinegray = $("[data-Negative1PB]");
const $Ulineblue = $("[data-Negative1PT]");
const $Ulinegray2 = $("[data-Negative2PB]");
const $Ulineblue2 = $("[data-Negative2PT]");
const $Ulinegray3 = $("[data-Negative3PB]");
const $Ulineblue3 = $("[data-Negative3PT]");
const $Ulinegray4 = $("[data-Negative4PB]");
const $Ulineblue4 = $("[data-Negative4PT]");

const $Ta2Ulinegray = $("[data-Negative1PBTa2]");
const $Ta2Ulineblue = $("[data-Negative1PTTa2]");
const $Ta2Ulinegray2 = $("[data-Negative2PBTa2]");
const $Ta2Ulineblue2 = $("[data-Negative2PTTa2]");
const $Ta2Ulinegray3 = $("[data-Negative3PBTa2]");
const $Ta2Ulineblue3 = $("[data-Negative3PTTa2]");
const $Ta2Ulinegray4 = $("[data-Negative4PBTa2]");
const $Ta2Ulineblue4 = $("[data-Negative4PTTa2]");

const numbersArray = inputsArray.map((input) => Number(input.value));

$btn.addEventListener("click", () => {
  // aca mapeo los inputs para tener en valor de cada uno de los inputs y los guardo en una constante
  const numbersArray = inputsArray.map((input) => Number(input.value));
  const numbersArray1 = inputsArray1.map((input) => Number(input.value));
  // tabla2
  const numbersArrayTa2 = inTableArray.map((input) => Number(input.value));
  const numbersArray1Ta2 = in2TableArray.map((input) => Number(input.value));

  const numbersArrayU = inputsUArray.map((input) => Number(input.value));
  const numbersArrayUTable2 = inputsUTableArray.map((input) =>
    Number(input.value)
  );

  ErrorCalibracion(
    numbersArray1,
    numbersArray,
    numbersArrayTa2,
    numbersArray1Ta2
  );

  ErrorCalibracion(
    numbersArray1,
    numbersArray,
    numbersArrayTa2,
    numbersArray1Ta2
  );

  const arraysumaU = [];
  const arrayError = [];
  const arrayRestaU = [];
  const Ta2arraysumaU = [];
  const Ta2arrayError = [];
  const Ta2arrayRestaU = [];

  let pointMove;

  ErrorPointMove(
    $point1,
    arrayError,
    $errorlist,
    numbersArray1[0],
    numbersArray[0],
    pointMove
  );
  ErrorPointMove(
    $point2,
    arrayError,
    $errorlist,
    numbersArray1[1],
    numbersArray[1],
    pointMove
  );
  ErrorPointMove(
    $point3,
    arrayError,
    $errorlist,
    numbersArray1[2],
    numbersArray[2],
    pointMove
  );
  ErrorPointMove(
    $point4,
    arrayError,
    $errorlist,
    numbersArray1[3],
    numbersArray[3],
    pointMove
  );

  ErrorPointMove(
    $Ta2point1,
    Ta2arrayError,
    $Ta2errorlist,
    numbersArray1Ta2[0],
    numbersArrayTa2[0],
    pointMove
  );
  ErrorPointMove(
    $Ta2point2,
    Ta2arrayError,
    $Ta2errorlist,
    numbersArray1Ta2[1],
    numbersArrayTa2[1],
    pointMove
  );
  ErrorPointMove(
    $Ta2point3,
    Ta2arrayError,
    $Ta2errorlist,
    numbersArray1Ta2[2],
    numbersArrayTa2[2],
    pointMove
  );
  ErrorPointMove(
    $Ta2point4,
    Ta2arrayError,
    $Ta2errorlist,
    numbersArray1Ta2[3],
    numbersArrayTa2[3],
    pointMove
  );

  ErrorSubtractU(
    arrayRestaU,
    $UlistResta,
    $Ulinegray,
    numbersArray1[0],
    numbersArray[0],
    numbersArrayU[0]
  );
  ErrorSubtractU(
    arrayRestaU,
    $UlistResta,
    $Ulinegray2,
    numbersArray1[1],
    numbersArray[1],
    numbersArrayU[1]
  );
  ErrorSubtractU(
    arrayRestaU,
    $UlistResta,
    $Ulinegray3,
    numbersArray1[2],
    numbersArray[2],
    numbersArrayU[2]
  );
  ErrorSubtractU(
    arrayRestaU,
    $UlistResta,
    $Ulinegray4,
    numbersArray1[3],
    numbersArray[3],
    numbersArrayU[3]
  );

  ErrorSubtractU(
    Ta2arrayRestaU,
    $Ta2UlistResta,
    $Ta2Ulinegray,
    numbersArray1Ta2[0],
    numbersArrayTa2[0],
    numbersArrayUTable2[0]
  );
  ErrorSubtractU(
    Ta2arrayRestaU,
    $Ta2UlistResta,
    $Ta2Ulinegray2,
    numbersArray1Ta2[1],
    numbersArrayTa2[1],
    numbersArrayUTable2[1]
  );
  ErrorSubtractU(
    Ta2arrayRestaU,
    $Ta2UlistResta,
    $Ta2Ulinegray3,
    numbersArray1Ta2[2],
    numbersArrayTa2[2],
    numbersArrayUTable2[2]
  );
  ErrorSubtractU(
    Ta2arrayRestaU,
    $Ta2UlistResta,
    $Ta2Ulinegray4,
    numbersArray1Ta2[3],
    numbersArrayTa2[3],
    numbersArrayUTable2[3]
  );

  ErrorAddU(
    arraysumaU,
    $UlistSuma,
    $Ulineblue,
    numbersArray1[0],
    numbersArray[0],
    numbersArrayU[0]
  );
  ErrorAddU(
    arraysumaU,
    $UlistSuma,
    $Ulineblue2,
    numbersArray1[1],
    numbersArray[1],
    numbersArrayU[1]
  );
  ErrorAddU(
    arraysumaU,
    $UlistSuma,
    $Ulineblue3,
    numbersArray1[2],
    numbersArray[2],
    numbersArrayU[2]
  );
  ErrorAddU(
    arraysumaU,
    $UlistSuma,
    $Ulineblue4,
    numbersArray1[3],
    numbersArray[3],
    numbersArrayU[3]
  );

  ErrorAddU(
    Ta2arraysumaU,
    $Ta2UlistSuma,
    $Ta2Ulineblue,
    numbersArray1Ta2[0],
    numbersArrayTa2[0],
    numbersArrayUTable2[0]
  );
  ErrorAddU(
    Ta2arraysumaU,
    $Ta2UlistSuma,
    $Ta2Ulineblue2,
    numbersArray1Ta2[1],
    numbersArrayTa2[1],
    numbersArrayUTable2[1]
  );
  ErrorAddU(
    Ta2arraysumaU,
    $Ta2UlistSuma,
    $Ta2Ulineblue3,
    numbersArray1Ta2[2],
    numbersArrayTa2[2],
    numbersArrayUTable2[2]
  );
  ErrorAddU(
    Ta2arraysumaU,
    $Ta2UlistSuma,
    $Ta2Ulineblue4,
    numbersArray1Ta2[3],
    numbersArrayTa2[3],
    numbersArrayUTable2[3]
  );
});
