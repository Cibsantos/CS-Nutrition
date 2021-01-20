let search = document.querySelector("#search")

search.addEventListener("input", function(){
    
    let patients = document.querySelectorAll(".patient");

    if(this.value.length > 0)
        for(let i = 0 ; i < patients.length; i++){
            let patient = patients[i]; 
            let tdName = patient.querySelector(".info-nome");
            let name = tdName.textContent;
            //Função expressão regular para comparação do que é buscado com oq tem na tabela 
            let expression = new RegExp(this.value, "i");
        if(expression.test(name)){
             patient.classList.remove("invisible");
        }else{
           patient.classList.add("invisible");
        }
    }else{
        for(let i = 0 ; i < patients.length; i++){
            let patient = patients[i]; 
            patient.classList.remove("invisible");
        }
    }
    

})

