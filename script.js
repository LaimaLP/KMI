let resultDOM = document.getElementById("result");

function findKMI(ugis, svoris) {
    // KMI = svoris (kg) / (ūgis (cm) / 100)^2.
    const kmi = svoris / ((ugis / 100) ** 2);
    return kmi.toFixed(2);
}

document.getElementById("skaiciuoti").addEventListener("click", () => {
    const UgisDOM = parseFloat(document.getElementById("ugis").value);
    const SvorisDOM = parseFloat(document.getElementById("svoris").value);

    if (isNaN(UgisDOM) || isNaN(SvorisDOM) || UgisDOM <= 0 || SvorisDOM <= 0) {
        alert('Duomenys neteisingi');
    }

    const kmiResult = findKMI(UgisDOM, SvorisDOM);
    
    resultDOM.innerHTML = "Jūs sveriate " + SvorisDOM.toFixed() + " kilogramus. Jūsų kūno masės indeksas yra " + kmiResult;
    
    // spalvos keitimas pagal KMI
    if (kmiResult < 18.5) {
        resultDOM.style.color = 'yellow';
    } else if (kmiResult >= 18.5 && kmiResult <= 24.9) {
        resultDOM.style.color = 'green';
    } else {
        resultDOM.style.color = 'red';
    }

    resetButton.style.display = 'block';
});

document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("ugis").value = "";
    document.getElementById("svoris").value = "";
    resultDOM.innerHTML = "";
    resultDOM.style.color = ''; 
   //mygtuko neberodom
    resetButton.style.display = 'none';
});

// Atsakymo laukelis ir reset mygtukas turi būti nematomi iki tol kol nepaspaudžiamas mygtukas skaičiuoti
// Atspindėti kūno indekso atsakymus skirtingomis spalvomis. T.y jei svoris per mažas jis turėtų turėti geltoną spalvą, jei normalus žalią, jei viršsvoris orandžinę, o jeigu nutukimas turi turėti raudoną spalvą.
// Atsakymas turi atrodyti taip: „Jūs sveriate.... čia pasirenkama ar svoris per mažas ar normalus ir t.t“ Jūsų kūno masės indeksas yra.....čia įrašote apskaičiuotą kūno masės indeksą.
// Paspaudus reset mygtuką turi išsivalyti input laukeliai ir pasislėpti tiek atsakymas tiek reset mygtukas.