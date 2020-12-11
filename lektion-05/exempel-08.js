
        
        
        //Objektet String
        let myName = "Joel";
        console.log(myName);
        console.log(myName.length);
        console.log(myName.toUpperCase());


        //Objektet Math

        console.log(Math.PI);
        console.log(Math.round(2.1)); //Avrundar ner
        console.log(Math.round(2.5)); // avrundar upp
        console.log(Math.pow(2,5));
        console.log(Math.pow(3,5));
        console.log(Math.sqrt(16));
        console.log(Math.min(5,3));
        console.log(Math.max(5,3));

        console.log(Math.random());
        console.log(Math.random()*10+1); //Slumptal mellan 1 och 10
        console.log(Math.round(Math.random()*10 +1)); //Avrundar slumptal mellan 1 och 10



        //Objektet Date
        let datum = new Date();
        console.log(datum);
        console.log(Date());
        console.log(datum.getFullYear());
        console.log(datum.getMonth()); // får 11? det är ju december? 
        //det är för att månaderna går fråån 0-11 i JS. 0=januari, 11=december
        console.log(datum.getDate());
        console.log(datum.getDay());
