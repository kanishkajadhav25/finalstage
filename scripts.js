let riddleIndex = 0;

const riddles = [

    "In the corner of campus, I stand. A place for gatherings, where crowds expand. I'm round in shape, with steps that rise, For events, talks, or stargazing skies. People love to gather here, For moments of joy, and cheers to hear. What am I? Bring me back!!"

];

 

// Display the first riddle when the page loads

document.getElementById('riddle-text').innerText = riddles[riddleIndex];

 

// Countdown timer logic (if needed)

let countdownTime = 600; // 10 minutes in seconds

const timerElement = document.getElementById('timer');

 

const countdown = setInterval(() => {

    let minutes = Math.floor(countdownTime / 60);

    let seconds = countdownTime % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerElement.textContent = `${minutes}:${seconds}`;

    countdownTime--;

 

    if (countdownTime < 0) {

        clearInterval(countdown);

        // Logic for website crash can be added here if desired

    }

}, 1000);