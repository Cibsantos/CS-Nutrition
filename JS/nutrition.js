
const title = document.querySelector("#titleHeader");
const patients = document.querySelectorAll(".patient");
const button = document.querySelector("#more-patient");
const form = document.querySelector("#form");

for (let i = 0; i < patients.length; i++) {

    const patient = patients[i];

    let tdHeigth = patient.querySelector(".info-altura");
    let tdWeigth = patient.querySelector(".info-peso");
    let tdImc = patient.querySelector(".info-imc");

    let height = tdHeigth.textContent;
    let weight = tdWeigth.textContent;
    let heigthOk = validateHeigth(height);
    let weightOk = validateWeight(weight);

    if (!heigthOk) {
        
        tdImc.innerHTML = "ERRO";
        patient.classList.add("patientInvalid");
    }
    if (!weightOk) {

       
        tdImc.innerHTML = "ERRO";
        patient.classList.add("patientInvalid");

    }
    if (heigthOk && weightOk) {
        var imc = calcImc( weight,height)
        tdImc.innerHTML = imc;
    }
}


function calcImc(weight, height){
    let imc = 0;
    imc = weight / (height * height);
    return imc.toFixed(2) ; 

}


function validateWeight(weight) {

    if (weight > 0 && weight < 500) {
        return true;
    }else{
        return false;
    }
}


function validateHeigth(height) {

    if (height > 1.00 && height < 3.00) {
        return true;
    }else{
        return false;
    }
}
