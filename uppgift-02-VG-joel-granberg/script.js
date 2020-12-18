// VARIABLER SOM SKA MANIPULERAS. INPUT ÄR EN STRÄNG DÄR JAG SPARAR ALL INDATA, DEN RÄKNAS SEDAN UT LÄNGRE NER I CALCULATE
let input = "";
let x="";
let z="";

let bntSubmit = document.getElementById('submit')
bntSubmit.addEventListener('click', addInput)
function addInput(){    
z=document.getElementById('userInput')
input=input+z.value;
console.log(input)

/*
HÄR KÖRDE JAG FAST. DETTA VAR TÄNKT ATT VARA MIN FELSÖKNING FÖR FELAKTIGA KNAPPTRYCK, TILL EXEMPEL OM ANVÄNDAREN SLÅR IN BOKSTÄVER. OM DET INTE ÄR SIFFROR ELLER "." SÅ SKA EN POP-UP RUTA KOMMA. JAG FÖRSÖKTE SPARA ENSTAKA CHAR I EN VARIABEL JAG DÖPT TILL 'CHECK' MEN JAG FICK DET INTE ATT FUNGERA. JAG TAR GÄRNA EMOT FEEDBACK PÅ HUR JAG KAN LÖSA DETTA. 

for (let i = 0; i < input.length; i++) {
    let check;

    check = input.charAt[i];
    console.log(check)
    if (check=="0"||"1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"0"||"."){
      //  input= input +z.value; 
    //    console.log(input)
    console.log("check" +check)
            }
            else{
        window.alert("Bara siffror är tillåtna, försök igen");
        input="";
    }
    
}
*/

}
// SAMTLIGA KNAPPAR MED EVENT, VID TRYCK LÄGGS TECKNET TILL I STRÄNGEN. 
let btnPlus = document.getElementById('plus');
btnPlus.addEventListener('click', addPlus)
function addPlus(){
     x = document.getElementById("plus");
     input= input + x.innerText;
console.log(input)
 }

let btnMinus = document.getElementById('minus');
btnMinus.addEventListener('click', addMinus)
function addMinus(){
     x = document.getElementById("minus");
     input= input + x.innerText;
console.log(input)
 }

let btnTimes = document.getElementById('times');
btnTimes.addEventListener('click', addTimes)
function addTimes(){
     x = document.getElementById("times");
     input= input + x.innerText;
console.log(input)
 }

let btnDivide = document.getElementById('divide');
btnDivide.addEventListener('click', addDivide)
function addDivide(){
    x=document.getElementById("divide");
    input= input + x.innerText;
    console.log(input)
}

let btnOne = document.getElementById('one');
btnOne.addEventListener('click', addOne)
function addOne(){
    x=document.getElementById("one");
    input= input + x.innerText;
    console.log(input)
}

let btnTwo = document.getElementById('two');
btnTwo.addEventListener('click', addTwo)
function addTwo(){
    x=document.getElementById("two");
    input= input + x.innerText;
    console.log(input)
}

let btnThree = document.getElementById('three');
btnThree.addEventListener('click', addThree)
function addThree(){
    x=document.getElementById("three");
    input= input + x.innerText;
    console.log(input)
}

let btnFour = document.getElementById('four');
btnFour.addEventListener('click', addFour)
function addFour(){
    x=document.getElementById("four");
    input= input + x.innerText;
    console.log(input)
}

let btnFive = document.getElementById('five');
btnFive.addEventListener('click', addFive)
function addFive(){
    x=document.getElementById("five");
    input= input + x.innerText;
    console.log(input)
}

let btnSix = document.getElementById('six');
btnSix.addEventListener('click', addSix)
function addSix(){
    x=document.getElementById("six");
    input= input + x.innerText;
    console.log(input)
}

let btnSeven = document.getElementById('seven');
btnSeven.addEventListener('click', addSeven)
function addSeven(){
    x=document.getElementById("seven");
    input= input + x.innerText;
    console.log(input)
}

let btnEight = document.getElementById('eight');
btnEight.addEventListener('click', addEight)
function addEight(){
    x=document.getElementById("eight");
    input= input + x.innerText;
    console.log(input)
}

let btnNine = document.getElementById('nine');
btnNine.addEventListener('click', addNine)
function addNine(){
    x=document.getElementById("nine");
    input= input + x.innerText;
    console.log(input)
}

let btnZero = document.getElementById('zero');
btnZero.addEventListener('click', addZero)
function addZero(){
    x=document.getElementById("zero");
    input= input + x.innerText;
    console.log(input)
}

let btnComma = document.getElementById('comma');
btnComma.addEventListener('click', addComma)
function addComma(){
    x=document.getElementById("comma");
    input= input + x.innerText;
    console.log(input)
}

let btnAllClear = document.getElementById('allClear');
btnAllClear.addEventListener('click', clear)
function clear(){
    x='';
    input='';
}
// HÄR AKTIVERAS UTRÄKNINGEN, INPUT RÄKNAS UT I CALCULATE
let btnEquals = document.getElementById('equals');
btnEquals.addEventListener('click', calculate)


// FUNKTIONEN CALCULATE IDENTIFIERAR OPERATORTECKNET, DELAR SEDAN STRÄNGEN I 2 TAL, DET SOM KOMMER FÖRE OPERATORN OCH DET SOM KOMMER EFTER. SEDAN GÖRS UTRÄKNINGEN OCH PRESENTERAS I EN RUTA. SIST SÅ RENSAS INPUT SÅ ATT EN NY UTRÄKNING KAN GÖRAS
function calculate(){


    let index="";
 let operator="";
 let lengthOfIndex=input.length;


  while(true){
    index = input.indexOf("+");
    if (index > 0 && index < lengthOfIndex) {
        operator= input.charAt([index]);
        break;
    }
    index = input.indexOf("-");
    if (index > 0 && index < lengthOfIndex) {
        operator= input.charAt([index]);
        break;
    }
    index = input.indexOf("/");
    if (index > 0 && index < lengthOfIndex) {
        operator= input.charAt([index]);
        break;
    }
    index = input.indexOf("*");
    if (index > 0 && index < lengthOfIndex) {
        operator= input.charAt([index]);
        break;
    }
}

       let x= parseFloat(input.substring(0,index));
       let y=parseFloat(input.substring(index+1));
      
     
    switch (operator) {
        case '+':
            console.log(x + " "+ operator +" "+ y + " = " + (x + y));
            window.alert(x + " "+ operator +" "+ y + " = " + (x + y));
            break;
        case '*':
            console.log(x + " " + operator +" "+ y + " = " + (x * y));
            window.alert(x + " " + operator +" "+ y + " = " + (x * y));
            break;
        case '/':
            console.log(x + " " + operator +" "+ y + " = " + (x / y));
            window.alert(x + " " + operator +" "+ y + " = " + (x / y));
            break;
        case '-':
            console.log(x + " " + operator +" "+ y + " = " + (x - y));
            window.alert(x + " " + operator +" "+ y + " = " + (x - y));
            break;
            //Lägg till alert för att visa resultat
    }
clear();
}


