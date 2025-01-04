// Function to display the current time in 12-hour format
function displayTime() {
    // Get the current date and time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Format minutes to always have two digits
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Convert hours from 24-hour format to 12-hour format
    let formattedTime;
    if (hours === 0) {
        formattedTime = `12:${formattedMinutes}`; // Midnight case (12 AM)
    } else if (hours < 12) {
        formattedTime = `${hours}:${formattedMinutes}`; // Morning hours
    } else if (hours === 12) {
        formattedTime = `12:${formattedMinutes}`; // Noon case (12 PM)
    } else {
        formattedTime = `${hours - 12}:${formattedMinutes} PM`; // Afternoon/evening hours (PM)
    }

    // Display the formatted time in the element with id "current-time"
    document.getElementById("current-time").innerHTML = formattedTime;
}

// Function to display the current date in "Month Day" format (e.g., "Jan 5")
function displayDate() {
    const dateElement = document.getElementById("current-date");

    // Get the current date
    const today = new Date();

    // Get the full month (shortened to 3 letters) and day of the month
    const month = today.toLocaleString('default', { month: 'short' }); // Example: "Jan"
    const day = today.getDate(); // Example: "5"

    // Set the formatted date to the element with id "current-date"
    dateElement.textContent = `${month} ${day}`;
}

// Event listeners for social media icon clicks to open in new tabs
const githubIcon = document.getElementById('github');
const youtubeIcon = document.getElementById('youtube');
const spotifyIcon = document.getElementById('spotify');
const redditIcon = document.getElementById('reddit');
const discordIcon = document.getElementById('discord');

// Open the respective URLs in a new tab when icons are clicked
githubIcon.addEventListener('click', function() {
    window.open('https://github.com', '_blank'); // Open GitHub
});

youtubeIcon.addEventListener('click', function() {
    window.open('https://www.youtube.com', '_blank'); // Open YouTube
});

spotifyIcon.addEventListener('click', function() {
    window.open('https://open.spotify.com', '_blank'); // Open Spotify
});

redditIcon.addEventListener('click', function() {
    window.open('https://www.reddit.com', '_blank'); // Open Reddit
});

discordIcon.addEventListener('click', function() {
    window.open('https://discord.com/channels/@me', '_blank'); // Open Discord
});

// Run the functions when the page loads
window.onload = function() {
    displayDate();  // Display the current date
    displayTime();  // Display the current time
}

// Update the time every minute (60000 milliseconds)
setInterval(displayTime, 60000);
