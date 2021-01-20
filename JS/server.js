let btnSearch = document.querySelector("#search-patient");

btnSearch.addEventListener("click", function(){
    // RESONSÁVEL POR FAZER REQUISIÇÕES
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            let respost = xhr.responseText;            
            let patients = JSON.parse(respost);
            

            patients.forEach(function(patient) {
            addPatient(patient);
         });
        }else{
            let erro = document.querySelector("#errorSearch");
            erro.innerHTML = `Erro Ao Buscar: ` + `${xhr.status} `+  `${xhr.responseText}`;            
        }

        
    });

    xhr.send();
})