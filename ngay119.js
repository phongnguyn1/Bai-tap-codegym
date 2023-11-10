let year = parseInt(prompt("Nhap so nam"));
let isLeapYear = false;

let Chiahetcho4 = year % 4 == 0;
if (Chiahetcho4) {
    let Chiahetcho100 = year % 100 == 0;
    if (Chiahetcho100) {
        let Chiahetcho400 = year % 400 == 0;
        if ( Chiahetcho400 ) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    alert(year + " La nam nhuan");
} else {
    alert(year + " khong phai nam nhuan ");
}