let name = prompt("Enter your name")

let myName = document.querySelector("#myName")

myName.innerHTML = name

var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDate() + "/" +(currentdate.getMonth()+1)
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes()

let myClock = document.querySelector("#myClock")
myClock.innerHTML = datetime
