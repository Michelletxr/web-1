const process = (e) => {
    if (e.preventDefault) 
        e.preventDefault();
        console.log("carrega")
}

var form = document.getElementById('form');
if (form.attachEvent) {
    form.attachEvent("submit", process);
    form.style.display = "block";
} else {
    console.log("esperando")
    form.addEventListener("submit", process);
}