function addItem(){
    var inputValue = document.getElementById("inputText").value
    if(inputValue != ''){
        var ul = document.getElementById("ulItems")
        var li = document.createElement("li")
        var itemText = document.createTextNode(inputValue)
        var span = document.createElement("SPAN");
        span.appendChild(itemText)
        li.appendChild(span)
        ul.appendChild(li)
    }
    //limpar o input de valor
    document.getElementById("inputText").value = "" 
}