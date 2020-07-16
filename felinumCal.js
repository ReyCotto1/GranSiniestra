$(document).ready(function(){
   
   calendar(new Date().getMonth());
});  
function calendar(month) {
        var padding = "";
        var totalFeb = "";
        var i = 1;
        var testing = "";
        var current = new Date();
        var cmonth = current.getMonth();
        var day = current.getDate();
        var year = current.getFullYear();
        var tempMonth = month + 1; 
        var prevMonth = month - 1;
        if (month == 1) {
            if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
                totalFeb = 29;
            } else {
                totalFeb = 28;
            }
        }
        var monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
        var totalDays = ["31", "" + totalFeb + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
        var tempDate = new Date(tempMonth + ' 1 ,' + year);
        var tempweekday = tempDate.getDay();
        var tempweekday2 = tempweekday;
        var dayAmount = totalDays[month];
        while (tempweekday > 0) {
            padding += "<td class='premonth'></td>";
            tempweekday--;
        }
        while (i <= dayAmount) {
            if (tempweekday2 > 6) {
                tempweekday2 = 0;
                padding += "</tr><tr>";
            }
            if (i == day && month == cmonth) {
                padding += "<td class='currentday'>" + i + "</td>";
            } else {
                padding += "<td class='currentmonth'>" + i + "</td>";
            }
            tempweekday2++;
            i++;
        }
        var calendarTable = "<table class='calendar'> <tr class='currentmonth'><th colspan='7'><i class='fa fa-calendar'></i>" + monthNames[month] + " " + year + "</th></tr>";
        calendarTable += "<tr class='weekdays'>  <td>Sun</td>  <td>Mon</td> <td>Tue</td> <td>Wed</td> <td>Thu</td> <td>Fri</td> <td>Sat</td> </tr>";
        calendarTable += "<tr>";
        calendarTable += padding;
        calendarTable += "</tr></table>";
        document.getElementById("calendar").innerHTML += calendarTable;
    }
