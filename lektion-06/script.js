let btnDate = document.getElementById('btnDate');
    console.log(btnDate)

    let date = document.getElementById('date');
    console.log(date)
    let time = document.getElementById('time');
    console.log(time)
    
    btnDate.addEventListener('click' , displayDate);
    btnDate.addEventListener('click' , displayTime);

    function displayDate(){
        date.innerHTML=new Date().toLocaleDateString();
    }
    
    function displayTime(){
        time.innerHTML=new Date().toLocaleTimeString();
    }