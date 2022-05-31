// Adjuster Trainee start date
var countDownDate = new Date("June 6, 2022 08:30:00").getTime();

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
        document.getElementById("tania").innerHTML = "Today is my first day working for Progressive Insurance! Thak you for the 💌 kind & motivational messages.";
    }

},
    1000)