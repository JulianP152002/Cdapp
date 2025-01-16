export function ErrorSubtractU(array, list, Uitem, valor1, valor2, valor3) {
  let resta = valor1 - valor2;
  let result = resta - valor3;
  let newresult = result.toFixed(1) * -62;

  if (resta > 0) {
    newresult = newresult + resta * 62;
  } else if (resta < 0) {
    newresult = newresult - resta * -62;
  }

  Uitem.style.paddingBottom = newresult + "px";

  const resultForList = result.toFixed(2);
  array.push(resultForList);
  list.forEach((item, index) => {
    item.innerHTML = array[index];
  });
  return;
}
