// Write your JavaScript code here.
// Remember to pay attention to page loading!

// 1. Use the window load event to ensure all elements have loaded before attaching event handlers.
window.addEventListener("Load", function() {
    // 2. When the "Take off" button is clicked, the following should happen:
    // 2.A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
    // 2.B The flight status should change to "Shuttle in flight."
    // 2.C The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
    // 2.D The shuttle height should increase by 10,000 miles.
    let takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", function(event) {
        // 2.A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
        let confirmReadyForTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmReadyForTakeOff) {
            // 2.B The flight status should change to "Shuttle in flight."
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Shuttle in flight.";
            // 2.C The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "blue";
            // 2.D The shuttle height should increase by 10,000 miles.
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            spaceShuttleHeight.innerHTML += 10000;
        }
    });
});
