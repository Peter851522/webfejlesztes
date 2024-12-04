//HAMBURGER MENÜ
const hamMenu = document.querySelector('.hamburger');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

//AUTÓ VÁLTOZTATÁS
const urlap = document.querySelector("form");
//SZÍN
const autoszin = document.getElementById("szin");
let valasztottSzin;
const szinCim = document.getElementById("szincim");
//KERÉK MÉRET
let kerekMeret;
const kerekAlap = 17 / 100;
const kerekMeretSzoveg = document.getElementById("kerek-meret-szoveg");
const elsoKerek = document.getElementById("elso-kerek");
const hatsoKerek = document.getElementById("hatso-kerek");
const kerekCim = document.getElementById("kerekcim");
//FELFÜGGESZTÉS MAGASSÁGA
let felfugg;
let alfa = 0.04;
const felfuggSzoveg = document.getElementById("felfugg-szoveg");
const reszletek = document.getElementById("reszletek");
const sarvedo = document.getElementById("sarvedo");
const felfuggCim = document.getElementById("felfugg-cim");
//EGYEDI CÍM
const egyediCim = document.getElementById("egyedi-cim");
//ÁR VÁLTOZÁS
const vegosszSzoveg = document.getElementById("vegossz");
let vegossz = 20000000;
const eco = 0;
const urban = 500000;
const sport= 1000000;
const allroad = 1500000;
const luxdrive = 2000000;
const hypertrack = 2500000; 
const csomagCim = document.getElementById("csomag-cim");
let valasztottCsomag;

function konf(){
    
}

urlap.addEventListener('click', () => {
    vegossz = 20000000;
    valasztottSzin = document.querySelector('input[name="szin"]:checked').value;

    kerekMeret = document.querySelector('input[name="kerek-meret"]').value;
    kerekMeret = parseInt(kerekMeret);
    kerekMeretSzoveg.textContent = `${Math.round(kerekMeret * kerekAlap* 100)/100}"`;
    elsoKerek.style.transform = `scale(${kerekMeret}%)`;
    hatsoKerek.style.transform = `scale(${kerekMeret}%)`;

 
    if(kerekMeret>100){
        kerekCim.textContent = `Kerék méret (+${(kerekMeret * 10000)-1000000}Ft)`;
        vegossz = vegossz + (kerekMeret * 10000)-1000000;
    } else if(kerekMeret<100){
        kerekCim.textContent = `Kerék méret (-${1000000 - (kerekMeret * 10000)}Ft)`;
        vegossz = vegossz - (1000000 - (kerekMeret * 10000));
    } else{
        kerekCim.textContent = `Kerék méret`;
    }

    felfugg = document.querySelector('input[name="felfugg"]').value;
    felfuggSzoveg.textContent = `${felfugg}cm`;
    felfugg = parseInt(felfugg);
    reszletek.style.marginTop = `${felfugg * -1 * alfa}em`;
    autoszin.style.marginTop = `${felfugg * -1 * alfa}em`;
    sarvedo.style.marginTop = `${felfugg * -1 * alfa}em`;

    if(felfugg != 0){
        felfuggCim.textContent=`Felfüggesztés magassága (+${250000}Ft)`;
        vegossz = vegossz + 250000;
    }
    else{
        felfuggCim.textContent=`Felfüggesztés magassága`;
    }

    if(document.querySelector('input[name="egyedi"]').value != ""){
        egyediCim.textContent = "Egyedi szöveg gravíroztatása (+150000Ft)";
        vegossz = vegossz + 150000;
    }
    else{
        egyediCim.textContent = "Egyedi szöveg gravíroztatása";
    }

    if(valasztottSzin == "pir"){
        autoszin.style.filter = "var(--red-filter)";
        vegossz = vegossz + 200000;
        szinCim.textContent = "Szín (+200 000Ft)"
    }
    else if(valasztottSzin == "kek"){
        autoszin.style.filter = "var(--dark-blue-filter)";
        szinCim.textContent = "Szín";
    }
    else if(valasztottSzin == "pezs"){
        autoszin.style.filter = "var(--champagne-filter)";
        szinCim.textContent = "Szín";
    }
    else if(valasztottSzin == "fek"){
        autoszin.style.filter = "var(--black-filter)";
        szinCim.textContent = "Szín";
    }
    else if(valasztottSzin == "zold"){
        autoszin.style.filter = "var(--dark-green-filter)";
        szinCim.textContent = "Szín";
    }

    valasztottCsomag = document.getElementById('csomag').value;
    console.log(valasztottCsomag);
    if(valasztottCsomag == "EcoDrive"){
        csomagCim.textContent = `Csomag (+${eco}Ft)`;
        vegossz = vegossz + eco;
    }
    else if(valasztottCsomag == "UrbanPlus"){
        csomagCim.textContent = `Csomag (+${urban}Ft)`;
        vegossz = vegossz + urban;
    }
    else if(valasztottCsomag == "SportLine"){
        csomagCim.textContent = `Csomag (+${sport}Ft)`;
        vegossz = vegossz + sport;
    }
    else if(valasztottCsomag == "AllRoad"){
        csomagCim.textContent = `Csomag (+${allroad}Ft)`;
        vegossz = vegossz + allroad;
    }
    else if(valasztottCsomag == "LuxDrive"){
        csomagCim.textContent = `Csomag (+${luxdrive}Ft)`;
        vegossz = vegossz + luxdrive;
    }
    else if(valasztottCsomag == "HyperTrack"){
        csomagCim.textContent = `Csomag (+${hypertrack}Ft)`;
        vegossz = vegossz + hypertrack;
    }
    vegosszSzoveg.textContent = `Végösszeg: ${vegossz}Ft`;
})
//TELEFON
urlap.addEventListener('touchend', () => {
    vegossz = 20000000;
    valasztottSzin = document.querySelector('input[name="szin"]:checked').value;

    kerekMeret = document.querySelector('input[name="kerek-meret"]').value;
    kerekMeret = parseInt(kerekMeret);
    kerekMeretSzoveg.textContent = `${Math.round(kerekMeret * kerekAlap* 100)/100}"`;
    elsoKerek.style.transform = `scale(${kerekMeret}%)`;
    hatsoKerek.style.transform = `scale(${kerekMeret}%)`;

 
    if(kerekMeret>100){
        kerekCim.textContent = `Kerék méret (+${(kerekMeret * 10000)-1000000}Ft)`;
        vegossz = vegossz + (kerekMeret * 10000)-1000000;
    } else if(kerekMeret<100){
        kerekCim.textContent = `Kerék méret (-${1000000 - (kerekMeret * 10000)}Ft)`;
        vegossz = vegossz - (1000000 - (kerekMeret * 10000));
    } else{
        kerekCim.textContent = `Kerék méret`;
    }

    felfugg = document.querySelector('input[name="felfugg"]').value;
    felfuggSzoveg.textContent = `${felfugg}cm`;
    felfugg = parseInt(felfugg);
    reszletek.style.marginTop = `${felfugg * -1 * alfa}em`;
    autoszin.style.marginTop = `${felfugg * -1 * alfa}em`;
    sarvedo.style.marginTop = `${felfugg * -1 * alfa}em`;

    if(felfugg != 0){
        felfuggCim.textContent=`Felfüggesztés magassága (+${250000}Ft)`;
        vegossz = vegossz + 250000;
    }
    else{
        felfuggCim.textContent=`Felfüggesztés magassága`;
    }

    if(document.querySelector('input[name="egyedi"]').value != ""){
        egyediCim.textContent = "Egyedi szöveg gravíroztatása (+150000Ft)";
        vegossz = vegossz + 150000;
    }
    else{
        egyediCim.textContent = "Egyedi szöveg gravíroztatása";
    }

    if(valasztottSzin == "pir"){
        autoszin.style.filter = "var(--red-filter)";
        vegossz = vegossz + 200000;
        szinCim.textContent = "Szín (+200 000Ft)"
    }
    else if(valasztottSzin == "kek"){
        autoszin.style.filter = "var(--dark-blue-filter)";
        szinCim.textContent = "Szín";
    }
    else if(valasztottSzin == "pezs"){
        autoszin.style.filter = "var(--champagne-filter)";
        szinCim.textContent = "Szín";
    }
    else if(valasztottSzin == "fek"){
        autoszin.style.filter = "var(--black-filter)";
        szinCim.textContent = "Szín";
    }
    else if(valasztottSzin == "zold"){
        autoszin.style.filter = "var(--dark-green-filter)";
        szinCim.textContent = "Szín";
    }

    valasztottCsomag = document.getElementById('csomag').value;
    console.log(valasztottCsomag);
    if(valasztottCsomag == "EcoDrive"){
        csomagCim.textContent = `Csomag (+${eco}Ft)`;
        vegossz = vegossz + eco;
    }
    else if(valasztottCsomag == "UrbanPlus"){
        csomagCim.textContent = `Csomag (+${urban}Ft)`;
        vegossz = vegossz + urban;
    }
    else if(valasztottCsomag == "SportLine"){
        csomagCim.textContent = `Csomag (+${sport}Ft)`;
        vegossz = vegossz + sport;
    }
    else if(valasztottCsomag == "AllRoad"){
        csomagCim.textContent = `Csomag (+${allroad}Ft)`;
        vegossz = vegossz + allroad;
    }
    else if(valasztottCsomag == "LuxDrive"){
        csomagCim.textContent = `Csomag (+${luxdrive}Ft)`;
        vegossz = vegossz + luxdrive;
    }
    else if(valasztottCsomag == "HyperTrack"){
        csomagCim.textContent = `Csomag (+${hypertrack}Ft)`;
        vegossz = vegossz + hypertrack;
    }
    vegosszSzoveg.textContent = `Végösszeg: ${vegossz}Ft`;
})

