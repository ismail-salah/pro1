// Function to generate a random future date
function generateRandomDate() {
    var today = new Date();
    var randomNumberOfDaysToAdd = Math.floor(Math.random() * 10); // 10 days range for demo
    var randomDate = new Date(today);
    randomDate.setDate(today.getDate() + randomNumberOfDaysToAdd);
    randomDate.setHours(today.getHours() + Math.floor(Math.random() * 24)); // Random hour
    randomDate.setMinutes(today.getMinutes() + Math.floor(Math.random() * 60)); // Random minute
    return randomDate;
}

// Function to update the countdown
function updateCountdown() {
    var now = new Date();
    var distance = countdownDate - now;

    // Time calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is over, display some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}

// Set the countdown date
var countdownDate = generateRandomDate();

// Update the countdown every second
var x = setInterval(updateCountdown, 1000);
