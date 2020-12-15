let x=0;
let y=0;
let input="10/5";
let operator="";
let result=0;
let index=0;
let boolean, loopiloop = true;
let lengthOfIndex=input.length;

  while(loopiloop){
          index = input.indexOf("-");
      if (index > 0 && index < lengthOfIndex) {
        operator=input.charAt(index);
         break;
      }
      console.log(index)
      index = input.indexOf("+");
      if (index > 0 && index < lengthOfIndex) {
        operator=input.charAt(index);
         break;
      }
      console.log(index)
      index = input.indexOf("*");
      if (index > 0 && index < lengthOfIndex) {
        operator=input.charAt(index);
         break;
        }
        console.log(index)
        index = input.indexOf("/");
        if (index > 0 && index < lengthOfIndex) {
          operator=input.charAt(index);
           break;
      }
              }
        console.log(index)
        x= parseFloat(input.substring(0,index));
        y=parseFloat(input.substring(index+1));
      console.log(x, y, operator)

    switch (operator) {
        case '+':
        console.log(x + ""+operator + y + "=" + (x + y));
            break;
        case '*':
        console.log(x + "" + operator + y + " = " + (x * y));
            break;
        case '/':
        console.log(x + "" + operator + y + "=" + (x / y));
            break;
        case '-':
        console.log(x + "" + operator + y + "=" + (x - y));
            break;
    }
 
