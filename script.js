
//========================
// clock
//========================

function updateClock()
{
    const clock = document.getElementById("clock");

    if(clock)
    {
        clock.textContent = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
    }
}
updateClock();
setInterval(updateClock, 1000);