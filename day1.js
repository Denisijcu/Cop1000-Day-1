/*
var students = 8;
var teachers = 1;
var balance = 100;
if (!(balance > 1000)) {
  alert('You do not qualify for the free airline this month!!!');
}


var isMichaelPhelps = true;
var isMerman = true;
var hasGills = true;

if (isMichaelPhelps || isMerman || hasGills) {
  winGoldMedals();
}

function winGoldMedals() {
  document.write('Yes, we executed the code block');
}



function killSelf() {
  document.write("Please call the helpline instead");
}

function liveOn() {
  document.write("</br>It's party time!");
}

var rich = true;
var happy = true;

if (!rich && !happy) {
  killSelf();
} else {
  liveOn();
}



function usePostOffice(){

}
function useFedex(){

}

if (!(urgent && important)){
      usePostOffice();
}else {
   useFedex();
}




function doSomething() {
  document.write(Math.abs(-5));
}
let x = 7*;
if (Math.abs(x) > 5) {
  doSomething();

}



document.write(Math.floor(Math.random() * 100) + 1 + "<br\>");
document.write(Math.floor(Math.random() * 100) + 1 + "<br\>");
document.write(Math.floor(Math.random() * 100) + 1 + "<br\>");
document.write(Math.floor(Math.random() * 100) + 1 + "<br\>");
document.write(Math.floor(Math.random() * 100) + 1 + "<br\>");
document.write(Math.floor(Math.random() * 100) + 1 + "<br\>");
document.write(Math.floor(Math.random() * 100) + 1 + "<br\>");
document.write(Math.floor(Math.random() * 100) + 1 + "<br\>");

*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.write(getRndInteger(5, 10) + "<br />");

document.write(getRndInteger(50, 70) + "<br />");
document.write(getRndInteger(1, 3000) + "<br />");
document.write(getRndInteger(0, 9) + "<br />");

function coinFlip() {
  return Math.floor(Math.random() * 2);
}

var result = coinFlip();
document.write(result + "<br />");

if (result === 0) {
  document.write("Head <br/>");
} else {
  document.write("Tails <br/>");
}