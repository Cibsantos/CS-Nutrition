button.addEventListener("click", function (event) {
    event.preventDefault();

    const patient = infoForm(form);
    const error = validate(patient);

    if (error.length > 0) {

        displayMessageError(error);

        return;
    }

    addPatient(patient);
    form.reset();
    let ul = document.querySelector(".error");
    ul.innerHTML = "";
});

function addPatient(patient) {


    const patientTr = createTr(patient);

    

    const table = document.querySelector("#table-patients");
    table.appendChild(patientTr);
  
}

function displayMessageError(error) {
    let ul = document.querySelector(".error");
    ul.innerHTML = "";

    error.forEach(function (erro) {
        let li = document.createElement("li");
        li.textContent = erro,
            ul.appendChild(li)
    });



}

function infoForm(form) {

    const patient = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }

    return patient;
}

function createTr(patient) {

    const patientTr = document.createElement("tr");
    patientTr.classList.add("patient");

    patientTr.appendChild(creatTd(patient.nome, "info-nome"));
    patientTr.appendChild(creatTd(patient.peso, "info-peso"));
    patientTr.appendChild(creatTd(patient.altura, "info-altura"));
    patientTr.appendChild(creatTd(patient.gordura, "info-gordura"));
    patientTr.appendChild(creatTd(patient.imc, "info-imc"));

    return patientTr;

}

function creatTd(info, classe) {
    const td = document.createElement("td");
    td.textContent = info;
    td.classList.add(classe);
    return td;
}
/*
function validatePw(patient){
   if(validateWeight(patient.weight)){
       return "";
   }else{
       return "O Peso é Inválido !";
   }

}
*/

function validate(patient) {

    let error = [];

    if (!validateHeigth(patient.altura)) error.push("Altura Inválida");

    if (!validateWeight(patient.peso)) error.push("Peso Inválido");

    if (patient.nome.length == 0) error.push("Informa o Nome do Paciente");

    if (patient.gordura.length == 0) error.push("Informe a % de Gordura do Paciente");

    return error;
}



