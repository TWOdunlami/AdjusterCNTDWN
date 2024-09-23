// New Role start date
var countDownDate = new Date("October 21, 2023 08:30:00").getTime();

var ramos = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 *60)) / 1000);

    document.getElementById("tania").innerHTML = days + "d " + hours + "h " 
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(ramos);
        document.getElementById("tania").innerHTML = "I am a Customer Advocate at MetLife Insurance! Thank you for the kind & motivational messages.💌";
    }

},
    1000)
