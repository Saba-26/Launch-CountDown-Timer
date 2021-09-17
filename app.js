window.setInterval(function(){

    var current_date=new Date();
    var date=new Date(2021,10,10);

    var time=Math.floor((date-current_date)/1000);

    console.log(time);

    var seconds=time%60;

    var minutes=Math.floor((time/60)%60);
    var hours=Math.floor((time/3600)%24);
    var days=Math.floor((time/86400));

    
    document.getElementsByClassName("seconds")[0].innerHTML = seconds;
    document.getElementsByClassName("minutes")[0].innerHTML = minutes;
    document.getElementsByClassName("hours")[0].innerHTML = hours;
    document.getElementsByClassName("days")[0].innerHTML = days;
}, 1000);
