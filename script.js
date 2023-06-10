
// Dane wejściowe
const x = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const y = [122, 125, 131, 135, 142, 145, 150, 154, 159, 164, 168];

// obiczanie sredniej dla 'x' i 'y'
const obliczSrednia = el =>{
    return el.reduce((a, b) => a + b, 0) / el.length;
}

const sredniaY = obliczSrednia(y);
const sredniaX = obliczSrednia(x);


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

//obliczanie wartosci 'b'
const calculateB = (wynikA, sredniaX, sredniaY) => {
    return sredniaY - sredniaX*wynikA;
}


const wynikA = calculateA(x, y, sredniaX, sredniaY);
document.getElementById('wynikAValueA').textContent = wynikA.toFixed(2);

const wynikB = calculateB(wynikA, sredniaX, sredniaY);
document.getElementById('wynikAValueB').textContent = wynikB.toFixed(2);

/// szacowanie wartosci 'x'
const szacowanieDowolnegoX = (numer, wynikA, wynikB) =>{
    return numer*wynikA+wynikB;
}

const wynik19 = szacowanieDowolnegoX(19, wynikA, wynikB);
document.getElementById('wynikAValue19').textContent = wynik19.toFixed(2);



// sprawdzanie dowolnej wartosci od 1 do 30
const szacowanie = () => {
    const numerInput = document.getElementById('wartoscInput');
    const numer = parseInt(numerInput.value);
    const wynik = Math.round(szacowanieDowolnegoX(numer, wynikA, wynikB));

    document.getElementById('wynik').textContent = `Oszacowana liczba dla wartości ${numer} = ${wynik}`;
};
////////////////////////////////////////////////////////////////////////////

document.getElementById('funkcja').textContent = `y = ${wynikA.toFixed(2)}x * ${wynikB.toFixed(2)}`;

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

// // Obliczanie przedziałów ufności
// const obliczPrzedzialyUfnosci = (x, y, wynikA, wynikB) => {
//     const yPrzewidziane = x.map(xi => wynikA * xi + wynikB);
//     const residua = y.map((yi, i) => yi - yPrzewidziane[i]);
//
//     const sumaKwadratowResiduow = residua.reduce((a, b) => a + Math.pow(b, 2), 0);
//     const wariancjaEstymatoraA =
//         sumaKwadratowResiduow / (x.length - 2) / x.reduce((a, b) => a + Math.pow(b - sredniaX, 2), 0);
//
//     const wariancjaEstymatoraB =
//         wariancjaEstymatoraA * (1 / x.length + Math.pow(sredniaX, 2) / x.reduce((a, b) => a + Math.pow(b - sredniaX, 2), 0));
//
//     const wartoscT = 2.262; // wartość t dla przedziału ufności 95% (dla 9 stopni swobody)
//     const przedzialyUfnosci = x.map((xi, i) => {
//         const yPrzewidziana = wynikA * xi + wynikB;
//         const przedzialUfnosci = wartoscT * Math.sqrt(
//             wariancjaEstymatoraA * Math.pow(xi - sredniaX, 2) +
//             wariancjaEstymatoraB +
//             2 * (xi - sredniaX) * Math.sqrt(wariancjaEstymatoraA * wariancjaEstymatoraB)
//         );
//         return [yPrzewidziana - przedzialUfnosci, yPrzewidziana + przedzialUfnosci];
//     });
//
//     return przedzialyUfnosci;
// };
//
// //////////////////////////////////////////////////////////////////////////
// const przedzialy = obliczPrzedzialyUfnosci(x, y, wynikA, wynikB);
// console.log("Przedziały ufności dla wartości przewidywanych:");
// przedzialy.forEach((przedzial, i) => {
//     console.log(`x=${x[i]}, Przedział ufności: [${przedzial[0].toFixed(2)}, ${przedzial[1].toFixed(2)}]`);
// });










