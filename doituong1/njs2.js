let TodaysDate  = function (day,month,year) {
    day = this.day
    month = this.month
    year = this.year
    this.getDay=function (){
        return day
    }
    this.getMonth=function (){
        return month
    }
    this.getYear = function () {
        return year
    }

this.setDay = function(day) {
    this.day  = day;
}
this.setMonth = function(month) {
    this.month  = month;
}
this.setYear = function(year) {
    this.year  = year;
}

};
let date = new TodaysDate( 25, 7, 2003);

let day = date.getDay();

let month = date.getMonth();

let year = date.getYear();

alert(day + "thang" + month + "nam" + year);