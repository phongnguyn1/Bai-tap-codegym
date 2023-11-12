function calculate() {

    var a = document.getElementById("A").value;
    var b = document.getElementById("B").value;

    let A = parseFloat(a);
    let B = parseFloat(b);
    let result = numberA * numberB;
    document.getElementById("result").innerHTML = "S = " + result