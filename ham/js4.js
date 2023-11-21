function Kiemtradieukienwin(answer) {
    let result = "";
    if (answer) {(thang)
        result = "ban da thang.";
    } else {
        result = "thua roi a ?";
    }
    return result;
}

let confirmAnswer = confirm("banthangroia ?");
let theAnswer = Kiemtradieukienwin(confirmAnswer);
alert(theAnswer);