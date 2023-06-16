// Dane wejściowe dla Tab 1.
const x = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const y = [122, 125, 131, 135, 142, 145, 150, 154, 159, 164, 168];

// funkcja obliczana sredniej arytmetycznej
const obliczSrednia = el =>{
    return el.reduce((a, b) => a + b, 0) / el.length;
}

// obliczanie wartosci 'a'
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

// obliczanie wartosci 'b'
const calculateB = (wynikA, sredniaX, sredniaY) => {
    return sredniaY - sredniaX*wynikA;
};

// szacowanie dowolnej wartosci 'x'
const szacowanieDowolnegoX = (numer, wynikA, wynikB) =>{
    return numer*wynikA+wynikB;
};

// sprawdzanie dowolnej wartosci od 1 do 30
const szacowanie = () => {
    const numerInput = document.getElementById('wartoscInput');
    const numer = parseInt(numerInput.value);
    const wynik = Math.round(szacowanieDowolnegoX(numer, wynikA, wynikB));
    document.getElementById('wynik').textContent = `Oszacowana liczba dla wartości ${numer} = ${wynik}`;
};

// przypisywanie wartosci do zmiennych
const sredniaY = obliczSrednia(y);
const sredniaX = obliczSrednia(x);
const wynikA = calculateA(x, y, sredniaX, sredniaY);
const wynikB = calculateB(wynikA, sredniaX, sredniaY);
const wynik19 = szacowanieDowolnegoX(19, wynikA, wynikB);

// aktualizacja tekstu wyświetlanego na stronie
document.getElementById('wynikAValueA').textContent = wynikA.toFixed(2);
document.getElementById('wynikAValueB').textContent = wynikB.toFixed(2);
document.getElementById('wynikAValue19').textContent = wynik19.toFixed(2);
document.getElementById('funkcja').textContent = `y = ${wynikA.toFixed(2)}x + ${wynikB.toFixed(2)}`;

//wykresy
//zmienne z nazwami wykresow
const nazwaWykresuJeden = 'Wykres Tab 1.';
const nazwaWykresuDwa = 'Wykres Tab 2.';
const nazwaWykresuTrzy = 'Funkcja estymowana';

// funkcja rysujaca wykresy
const wykres = (osX, osY, nazwaWykresu) =>{
    const trace = {
        x: osX, 
        y: osY, 
        mode: 'lines',
        line: {
            color: 'red'
        }
    };
    const data = [trace];
    const layout = {
        title: nazwaWykresu,
        width: 400,
        height: 400,
        xaxis: {
            title: 'Masa ryby = X'
        },
        yaxis: {
            title: 'Stężenie substancji chemicznej = Y'
        }
    };
    Plotly.newPlot(nazwaWykresu, data, layout);
};
// wywolanie wykresow

//wykres wartosci Tab 1.
wykres(x, y, nazwaWykresuJeden)                          

//wykres funkcji estymowanej
const nowyX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nowyY = [];
for (let numer = 1; numer <= nowyX.length; numer++) {
    nowyY.push(szacowanieDowolnegoX(numer, wynikA, wynikB).toFixed(2));
}
wykres(nowyX, nowyY, nazwaWykresuTrzy);  

/// wykres dla Tab 2.
const sendData = () => {
    const dataTable = document.getElementById('data-table');
    const rows = dataTable.getElementsByTagName('tr');
    let y2 = [];
    for (let i = 1; i < rows.length; i++) {
      const yInput = document.getElementById(`yValue${i}`);
      y2.push(parseInt(yInput.value));
    }
      wykres(x, y2, nazwaWykresuDwa);                   
  };






