//Procurar o botao
document.querySelector("#add-time")

//adiciona o click para fazer a função cloneField
.addEventListener('click', cloneField)

//cria a função cloneField
function cloneField(){
    //seleciona os inputs de tempo e coloca que 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    const fields = newFieldContainer.querySelectorAll('input');

    fields.forEach(function(field){
        field.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}