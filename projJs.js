let ans = 0;
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform login logic here
    // Hide login form and show first clue form
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('puzzleForm').classList.remove('hidden');
});

document.getElementById('puzzleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform validation and logic for clue #1 here
    // Hide current clue form and show clue #2 form
    let c1 = document.getElementById("clue1Answer")

    if (c1.value === "8") {
        ans = ans + 1;
    }
    console.log(ans)
    document.getElementById('puzzleForm').classList.add('hidden');
    document.getElementById('clue2Form').classList.remove('hidden');


});

// Add event listeners and logic for other clue forms similarly
document.getElementById('clue2Form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform validation and logic for clue #1 here
    // Hide current clue form and show clue #2 form
    let c2 = document.getElementById("clue2Answer")
    console.log(c2.textContent)
    if (c2.value.toLowerCase() === "cricket") {
        ans = ans + 1
    }
    console.log(ans)
    document.getElementById('clue2Form').classList.add('hidden');
    document.getElementById('clue3Form').classList.remove('hidden');
});
document.getElementById('clue3Form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform validation and logic for clue #1 here
    // Hide current clue form and show clue #2 form
    let c3 = document.getElementById("clue3Answer")
    if (c3.value.toLowerCase() === "towel") {
        ans = ans + 1;
    }
    console.log(ans)
    document.getElementById('clue3Form').classList.add('hidden');
    document.getElementById('clue4Form').classList.remove('hidden');
});
document.getElementById('clue4Form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform validation and logic for clue #1 here
    // Hide current clue form and show clue #2 form
    let c4 = document.getElementById("clue4Answer")
    if (c4.value > 8 & c4.value < 15) {
        ans = ans + 1;
    }
    console.log(ans)
    document.getElementById('clue4Form').classList.add('hidden');
    document.getElementById('clue5Form').classList.remove('hidden');
});

document.getElementById('clue5Form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform validation and logic for clue #1 here
    // Hide current clue form and show clue #2 form
    let c5 = document.getElementById("clue5Answer");
    if (c5.value === 13) {
        ans = ans + 1
    }
    let d = document.getElementById("5")
    let c = document.getElementById("4")
    if (ans < 3) {
        d.textContent = "Hardluck!";
    } else {
        d.textContent = "Congratulations!"
    }
    c.textContent = "Your score is " + ans
    document.getElementById('clue5Form').classList.add('hidden');
    document.getElementById('treasureForm').classList.remove('hidden');
});

document.getElementById('treasureForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform validation and logic for treasure form here
    // Store user data and show congratulations message

    alert('Congratulations! You have completed the puzzle and found the treasure!');
    // Reset the puzzle and show login form again
    document.getElementById('treasureForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});