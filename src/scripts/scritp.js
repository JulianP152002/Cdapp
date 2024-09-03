const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
const $inputs = $$('[data-input]')
const $inputs1 = $$('[data-input1]')
const $inputsTa2 = $$('[data-inputable]')
const $inputs1Ta2 = $$('[data-inputable1]')

const $errorlist = $$('[data-Error]')
const $UlistSuma = $$('[data-Usuma]')
const $UlistResta = $$('[data-Uresta]')

const $Ta2errorlist = $$('[data-Ta2Error]')
const $Ta2UlistSuma = $$('[data-Ta2Usuma]')
const $Ta2UlistResta = $$('[data-Ta2Uresta]')


const $inputsU = $$('[data-inputU]')
const $inputsUtable2 = $$('[data-inputableU]')

const $btn = $('[data-button]')

const $point1 = $('[data-point1]')
const $point2 = $('[data-point2]')
const $point3 = $('[data-ponit3]')
const $point4 = $('[data-point4]')

const $Ulinegray = $('[data-Negative1PB]')
const $Ulineblue = $('[data-Negative1PT]')
const $Negative2PB = $('[data-Negative2PB]')
const $Negative2PT = $('[data-Negative2PT]')
const $Negative3PB = $('[data-Negative3PB]')
const $Negative3PT = $('[data-Negative3PT]')
const $Negative4PB = $('[data-Negative4PB]')
const $Negative4PT = $('[data-Negative4PT]')
// arrays de el resultado de la funcion
const arraysumaU = []
const arrayError = []
const arrayRestaU = []
const Ta2arraysumaU = []
const Ta2arrayError = []
const Ta2arrayRestaU = []

// array de los input
const inputsArray = [...$inputs]
const inputsArray1 = [...$inputs1]
const inTableArray = [...$inputsTa2]
const in2TableArray = [...$inputs1Ta2]

const inputsUArray = [...$inputsU]
const inputsUTableArray = [...$inputsUtable2]

const numbersArray = inputsArray.map(input => Number(input.value))

$btn.addEventListener('click', () => {

    const numbersArray = inputsArray.map(input => Number(input.value))
    const numbersArray1 = inputsArray1.map(input => Number(input.value))
    // tabla2
    const numbersArrayTa2 = inTableArray.map(input => Number(input.value))
    const numbersArray1Ta2 = in2TableArray.map(input => Number(input.value))

    const numbersArrayU = inputsUArray.map(input => Number(input.value))
    const numbersArrayUTable2 = inputsUTableArray.map(input => Number(input.value))


    function operacion(array, lista, num1, num2, num3) {
        const resultado = num1 - num2 + num3
        const newresultado = resultado.toFixed(2)
        array.push(newresultado)

        lista.forEach((item, index) => {
            item.innerHTML = array[index]
        })
        return
    }
    function RestaU(array, lista, num1, num2, num3) {
        const resultado = num1 - num2 - num3
        const newresultado = resultado.toFixed(2)
        array.push(newresultado)

        lista.forEach((item, index) => {
            item.innerHTML = array[index]
        })
        return
    }



    // operaciones de u




    function PointMove(poin, num1, num3, U) {
        const resultado = num1 - num3 + U
        let newresultado = resultado.toFixed(1) * 61
        if (newresultado < 0) {
            newresultado = newresultado - 10
        } if (newresultado === 0) {
            newresultado = newresultado - 4
        }
        console.log(newresultado)
        poin.style.bottom = newresultado + 'px'
    }
    //   function todo (poin, con, num1, num2, num3){
    //     const resultado = valor1 - valor2 + valor3
    //     const newresultado = resultado.toFixed(2)
    //     con.textContent = newresultado
    //     return 
    //   }


    PointMove($point1, numbersArray1[0], numbersArray[0], 0)
    PointMove($point2, numbersArray1[1], numbersArray[1], 0)
    PointMove($point3, numbersArray1[2], numbersArray[2], 0)
    PointMove($point4, numbersArray1[3], numbersArray[3], 0)

    function Umove(Uitem, valor1, valor2, valor3) {
        let resultado = valor1 - valor2 - valor3
        let newresultado = resultado.toFixed(1) * 57
        if (newresultado < 0) {
            newresultado = newresultado * -1 + 10
        }
        console.log('el paddin gray es' + newresultado)
        return Uitem.style.paddingBottom = newresultado + 'px'
    }
    Umove($Ulinegray, numbersArray1[0], numbersArray[0], numbersArrayU[0])

    // Umove(Negative3PB,numbersArray1[2], numbersArray[2], numbersArrayU[2])
    // Umove(Negative4PB,numbersArray1[3], numbersArray[3], numbersArrayU[3]) 
    function UmoveW(Uitem, valor1, valor2, valor3) {
        let resultado = valor1 - valor2 + valor3
        let newresultado = resultado.toFixed(1) * 57
        if (newresultado < 0) {
            newresultado = newresultado * -1
        }
        console.log('el paddin blue es' + newresultado)
        return Uitem.style.paddingTop = newresultado + 'px'
    }
    UmoveW($Ulineblue, numbersArray1[0], numbersArray[0], numbersArrayU[0])
    // UmoveW(Negative1PT,numbersArray1[0], numbersArray[0], numbersArrayU[0])
    // UmoveW(Negative2PT,numbersArray1[1], numbersArray[1], numbersArrayU[1])
    // UmoveW(Negative2PT,numbersArray1[2], numbersArray[2], numbersArrayU[2])
    // UmoveW(Negative3PT,numbersArray1[3], numbersArray[3], numbersArrayU[3])

    // Error
    operacion(arrayError, $errorlist, numbersArray1[0], numbersArray[0], 0)
    operacion(arrayError, $errorlist, numbersArray1[1], numbersArray[1], 0)
    operacion(arrayError, $errorlist, numbersArray1[2], numbersArray[2], 0)
    operacion(arrayError, $errorlist, numbersArray1[3], numbersArray[3], 0)

    // operaciones de u
    operacion(arraysumaU, $UlistSuma, numbersArray1[0], numbersArray[0], numbersArrayU[0])
    operacion(arraysumaU, $UlistSuma, numbersArray1[1], numbersArray[1], numbersArrayU[1])
    operacion(arraysumaU, $UlistSuma, numbersArray1[2], numbersArray[2], numbersArrayU[2])
    operacion(arraysumaU, $UlistSuma, numbersArray1[3], numbersArray[3], numbersArrayU[3])

    RestaU(arrayRestaU, $UlistResta, numbersArray1[0], numbersArray[0], numbersArrayU[0])
    RestaU(arrayRestaU, $UlistResta, numbersArray1[1], numbersArray[1], numbersArrayU[1])
    RestaU(arrayRestaU, $UlistResta, numbersArray1[2], numbersArray[2], numbersArrayU[2])
    RestaU(arrayRestaU, $UlistResta, numbersArray1[3], numbersArray[3], numbersArrayU[3])

    // TABLA 2
    operacion(Ta2arrayError, $Ta2errorlist, numbersArray1Ta2[0], numbersArrayTa2[0], 0)
    operacion(Ta2arrayError, $Ta2errorlist, numbersArray1Ta2[1], numbersArrayTa2[1], 0)
    operacion(Ta2arrayError, $Ta2errorlist, numbersArray1Ta2[2], numbersArrayTa2[2], 0)
    operacion(Ta2arrayError, $Ta2errorlist, numbersArray1Ta2[3], numbersArrayTa2[3], 0)


    operacion(Ta2arraysumaU, $Ta2UlistSuma, numbersArray1Ta2[0], numbersArrayTa2[0], numbersArrayUTable2[0])
    operacion(Ta2arraysumaU, $Ta2UlistSuma, numbersArray1Ta2[1], numbersArrayTa2[1], numbersArrayUTable2[1])
    operacion(Ta2arraysumaU, $Ta2UlistSuma, numbersArray1Ta2[2], numbersArrayTa2[2], numbersArrayUTable2[2])
    operacion(Ta2arraysumaU, $Ta2UlistSuma, numbersArray1Ta2[3], numbersArrayTa2[3], numbersArrayUTable2[3])

    RestaU(Ta2arrayRestaU, $Ta2UlistResta, numbersArray1Ta2[0], numbersArrayTa2[0], numbersArrayUTable2[0])
    RestaU(Ta2arrayRestaU, $Ta2UlistResta, numbersArray1Ta2[1], numbersArrayTa2[1], numbersArrayUTable2[1])
    RestaU(Ta2arrayRestaU, $Ta2UlistResta, numbersArray1Ta2[2], numbersArrayTa2[2], numbersArrayUTable2[2])
    RestaU(Ta2arrayRestaU, $Ta2UlistResta, numbersArray1Ta2[3], numbersArrayTa2[3], numbersArrayUTable2[3])
})
