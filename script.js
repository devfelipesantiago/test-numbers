const number = document.querySelector('.number');
const bFinal = document.querySelector('.bFinal');
const table = document.querySelector('#table');
const finaliza = document.querySelector('.finaliza');
const array = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(num, array) {
  if (array.indexOf(num) > -1) {
    return true;
  } else {
    return false;
  }
}

function createList() {
  if (isNumber(number.value) && !inList(number.value, array)) {
    array.push(number.value);
    const opt = document.createElement('option');
    opt.text += `Valor ${number.value} foi adicionado`;
    table.appendChild(opt);
    finaliza.innerHTML = '';
  } else {
    alert('Valor inválido ou já encontrado na lista');
  }
  number.value = '';
  number.focus();
}

function finalize() {
  bFinal.addEventListener('click', () => {
    console.log('ok');
    if (array.length == 0) {
      alert('Adicione valores antes de finalizar!');
    } else {
      let tot = array.length;
      let maior = array[0];
      let menor = array[0];
      let soma = 0;
      let media = 0;
      for (const pos in array) {
        soma += Number(array[pos]);
        if (array[pos] > maior) maior = array[pos];
        if (array[pos] < menor) menor = array[pos];
      }
      media = soma / tot;
      finaliza.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
      finaliza.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
      finaliza.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
      finaliza.innerHTML += `<p>Somado todos os valores, temos ${soma}.</p>`;
      finaliza.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
  });
}
finalize();
