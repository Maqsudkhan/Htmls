

document.getElementById("round1").innerHTML = Math.floor(Math.random() * 10)
document.getElementById("round2").innerHTML = Math.floor(Math.random() * 10)

function refresh(){
    document.getElementById("round1").innerHTML = Math.floor(Math.random() * 10)
    document.getElementById("round2").innerHTML = Math.floor(Math.random() * 10)
}

function check(){
    var round1 = parseInt(document.getElementById('round1').innerHTML)
    var round2 = parseInt(document.getElementById('round2').innerHTML)
    var user_guest = parseInt(document.querySelector('input').value)

    if(round1 + round2 == user_guest)
        alert('urra')
    else
        alert('xato')
}

