
function generateNumber() {
    const min = Math.ceil(document.querySelector('.input-up').value)
    const max = Math.floor(document.querySelector('.input-down').value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    const show = document.querySelector('.show')

    show.innerHTML = result
}

/*function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

  }*/


  /*
  ++ incremento
  -- decremento
  ** exponecial
  % resto da divisao

  se em :

  let example = 20
 example++
 console.log(example) */
