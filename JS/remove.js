const table = document.querySelector("#table-patients");

/*
patient.forEach(function(patt) {
    patt.addEventListener("dblclick", function(){
        this.remove();
    })
});
*/


//event -> eu pego o evento
//target -> quem foi clicado
// parentNode -> o pai ou seja exluo a TR
table.addEventListener("dblclick", function(event){
     
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    
})


