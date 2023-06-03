  // Dane wejściowe
const x = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const y = [122, 125, 131, 135, 142, 145, 150, 154, 159, 164, 168];
////////////////////////////////////////////////////////////////////////////

// obiczanie sredniej dla 'x' i 'y'
obliczSrednia = el =>{
    return el.reduce((a, b) => a + b, 0) / el.length;
  }
const sredniaY = obliczSrednia(y);
const sredniaX = obliczSrednia(x);
console.log(`Srednia dla x wynosi ${sredniaX}`);
console.log(`Srednia dla y wynosi ${sredniaY}`);
////////////////////////////////////////////////////////////////////////////

//obliczanie wartosci 'a'
const calculateA = (x, y, sredniaX, sredniaY) => {
    let iloczynOdchylen = 0;
    let kwadratOdchylenia = 0;
  
    for (let n = 0; n < x.length; n++) {
      const roznicaX = x[n] - sredniaX;
      const roznicaY = y[n] - sredniaY;
  
      iloczynOdchylen += roznicaX * roznicaY;
      kwadratOdchylenia += Math.pow(roznicaX, 2);
    }
    return iloczynOdchylen / kwadratOdchylenia;
  };
  ////////////////////////////////////////////////////////////////////////////

//obliczanie wartosci 'b'
  const calculateB = (wynikA, sredniaX, sredniaY) => {
    return sredniaY - sredniaX*wynikA;
  }
  ////////////////////////////////////////////////////////////////////////////


const wynikA = calculateA(x, y, sredniaX, sredniaY);
console.log(wynikA.toFixed(2));
document.getElementById('wynikAValueA').textContent = wynikA.toFixed(2);
  
const wynikB = calculateB(wynikA, sredniaX, sredniaY);
console.log(wynikB.toFixed(2));
document.getElementById('wynikAValueB').textContent = wynikB.toFixed(2);

/// szacowanie wartosci 19
const szacowanie19 = (numer, wynikA, wynikB) =>{
    return numer*wynikA+wynikB;
}

const wynik19 = szacowanie19(19, wynikA, wynikB);
console.log(wynik19.toFixed(2));
document.getElementById('wynikAValue19').textContent = wynik19.toFixed(2);
////////////////////////////////////////////////////////////////////////////


// sprawdzanie dowolnej wartosci od 1 do 30
const szacowanie = () => {
    const numerInput = document.getElementById('wartoscInput');
    const numer = parseInt(numerInput.value);
  
    const wynik = Math.round(numer * wynikA + wynikB);
    document.getElementById('wynik').textContent = `Oszacowana liczba dla wartości ${numer} = ${wynik}`;
  };
  ////////////////////////////////////////////////////////////////////////////

  document.getElementById('funkcja').textContent = `y = ${wynikA.toFixed(2)}x * ${wynikB.toFixed(2)}`;