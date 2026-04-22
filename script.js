//your JS code here. If required.
function updateTime() {
    const timer = document.getElementById("timer");
    const now = new Date();

    timer.textContent = now.toString();
}

// update every second
setInterval(updateTime, 1000);

// call once immediately (so it doesn't wait 1 sec)
updateTime();