// Write your JavaScript code here.
// Remember to pay attention to page loading!

// 1. Use the window load event to ensure all elements have loaded before attaching event handlers.
window.addEventListener("load", function() {
    // Document elements
    let takeOffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landButton = document.getElementById("landing");
    let abortMission = document.getElementById("missionAbort");

    // 2. When the "Take off" button is clicked, the following should happen:
    takeOffButton.addEventListener("click", function(event) {
        // 2.A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
        let confirmReadyForTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmReadyForTakeOff) {
            // 2.B The flight status should change to "Shuttle in flight."
            flightStatus.innerHTML = "Shuttle in flight.";
            // 2.C The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            shuttleBackground.style.backgroundColor = "blue";
            // 2.D The shuttle height should increase by 10,000 miles.
            spaceShuttleHeight.innerHTML += 10000;
        }
        // 3. When the "Land" button is clicked, the following should happen:
        landButton.addEventListener("click", function(event) {
            // 3.A A window alert should let the user know "The shuttle is landing. Landing gear engaged."
            window.alert("The shuttle is landing. Landing gear engaged.");
            // 3.B The flight status should change to "The shuttle has landed."
            flightStatus.innerHTML = "The shuttle has landed.";
            // 3.C The background color of the shuttle flight screen should change from blue to green.
            spaceShuttleHeight.style.backgroundColor = "green";
            // 3.D The shuttle height should go down to 0.
            spaceShuttleHeight.innerHTML = 0;
        });

        // 4. When the "Abort Mission" button is clicked, the following should happen:
        abortMission.addEventListener("click", function(event) {
            // 4.A A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
            let abortConfirmed = window.confirm("Confirm that you want to abort the mission.");
            if (abortConfirmed) {
                // 4.B The flight status should change to "Mission aborted."
                flightStatus.innerHTML = "Mission aborted";
                // 4.C The background color of the shuttle flight screen should change from blue to green.
                shuttleBackground.style.backgroundColor = "green";
                // 4.D The shuttle height should go to 0.
                spaceShuttleHeight.innerHTML = 0;
            }
            // 5. When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
            // 5.A The rocket image should move 10 px in the direction of the button that was clicked.
            // 5.B If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles
        });
        
        
        
    });
});
