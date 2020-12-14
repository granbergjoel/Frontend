let x=0;
let y=0;
let input="123+456";
let operator="";
let result=0;
let index=0;
let boolean, loopiloop = true;
let lengthOfIndex=input.length;

function calculate(){
 
    index = input.indexOf("+");
    if (index > 0 && index < lengthOfIndex) {
      
    }
    index = input.indexOf("-");
    if (index > 0 && index < lengthOfIndex) {
       
    }
    index = input.indexOf("/");
    if (index > 0 && index < lengtOfIndex) {
       
    }
    index = input.indexOf("*");
    if (index > 0 && index < lengtOfIndex) {
     
    }
   
        x= parseFloat(input.substring(0,index));
        y=parseFloat(input.substring(index+1));
      

    switch (operator) {
        case '+':
            System.out.println(x + ""+operator + y + "=" + (x + y));
            break;
        case '*':
            System.out.println(x + "" + operator + y + " = " + (x * y));
            break;
        case '/':
            System.out.println(x + "" + operator + y + "=" + (x / y));
            break;
        case '-':
            System.out.println(x + "" + operator + y + "=" + (x - y));
            break;
    }



    
}