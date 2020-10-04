
let d = new Date()

let year = d.getFullYear()
let mohth = d. getMonth () + 1;
let day = d.getDate()

let totalDays = new Date (year, month, 0).getDate()

let output =
(mohth<10 ? '0' : '') + month + '/'+
(day<10 ? '0' : '') + day + '/' + year

$('.date').text('${output}')