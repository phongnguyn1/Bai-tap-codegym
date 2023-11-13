function convertToCentury() { 
    inputYear = prompt("nhập năm ")
    let year = document.getElementById("inputYear").value;
    var century = Math.ceil(year / 100);
    document.write("đây là thế kỷ " + century )
}