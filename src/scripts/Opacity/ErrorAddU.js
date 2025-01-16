export function ErrorAddU(array, list, Uitem, valor1, valor2, valor3) {
  let resta = valor1 - valor2;
  let result = resta + valor3;
  let newresult = result.toFixed(1) * 58;

  if (resta > 0) {
    newresult = newresult - resta * 58;
  } else if (resta < 0) {
    newresult = newresult + resta * -58;
  }

  Uitem.style.paddingTop = newresult + "px";

  const resultList = result.toFixed(2);
  array.push(resultList);
  list.forEach((item, index) => {
    item.innerHTML = array[index];
  });
  return;
}
