const $$ = (selector) => document.querySelectorAll(selector);

const $errorlist = $$("[data-Error]");

export function ErrorPointMove(poin, array, lista, num1, num2, pointMove) {
  const result = num1 - num2;
  const newresult = result.toFixed(2);
  //operaciones
  array.push(newresult);

  lista.forEach((item, index) => {
    item.innerHTML = array[index];
  });
  //movimiento de los puntos

  pointMove = result.toFixed(1) * 61;

  if (pointMove < 0) {
    pointMove = pointMove - 10;
  }
  if (pointMove === 0) {
    pointMove = pointMove - 4;
  }
  poin.style.bottom = pointMove + "px";
  return;
}
