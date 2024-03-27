


function enter(){
    var item = document.getElementById("input").value;
    var lst = document.getElementById("lst").innerHTML
    lst += `<li>${item}</li>`
    document.getElementById("lst").innerHTML = lst

}
