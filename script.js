const input = document.getElementById("input-box")
const list = document.getElementById("list-container")


function addTask(){
    if(input.value === ''){
        alert("Escreva algo!")
    } else{
        let li = document.createElement("li")
        li.innerHTML = input.value;
        list.appendChild(li)

    }
}