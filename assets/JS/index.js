let date = new Date//today's full date
let year = date.getFullYear//current year
let month = date.getMonth//current month
let day = date.getDay//today's day
let todayDate = date.getDate//today's date 
let hour = date.getHours//current hour
let minutes = date.getMinutes//currentminutes
let time = date.getTime//time completed from jan 1 1970

let age = prompt("enter your age")
let years_lived = age*12*30.5*24*60*60*1000//for calculating how many millisecondsa person had live
alert(`The no. of millisecnds you had lived is ${years_lived}`)

let mate = date.toLocaleString()
/* Exercises: Level 3
Create a human readable time format using the Date time object. The hour and the minute should be
all the time two digits (7 hours should be 07 and 5 minutes should be 05
ans = i didn't get the answer*/