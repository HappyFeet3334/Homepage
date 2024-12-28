function displayTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let formattedTime = `${hours}:${minutes}`;

    if(hours < 12 && minutes > 9){
        formattedTime = `${hours}:${minutes}`;
    }
    else if(hours < 12 && minutes < 9){
        formattedTime = `${hours}:0${minutes}`;
    }
    else if(hours > 12 && minutes > 9){
        formattedTime = `${hours - 12}:${minutes}`;
    }
    else{
        formattedTime = `${hours - 12}:0${minutes}`;
    }
    document.getElementById("current-time").innerHTML = formattedTime;
  }

  function displayDate() {
    const dateElement = document.getElementById("current-date");
    
    // Get the current date
    const today = new Date();

    // Get the full month and day
    const month = today.toLocaleString('default', { month: 'short' }); // "long" gives the full month name (e.g., "December")
    const day = today.getDate(); // Day of the month (e.g., 27)

    // Set the formatted date to the element
    dateElement.textContent = `${month} ${day}`;
  }

//   function displayTemp() {
//     const today = new ();

//     let temp = today.
//   }

const githubIcon = document.getElementById('github');
const youtubeIcon = document.getElementById('youtube');
const spotifyIcon = document.getElementById('spotify');
const redditIcon = document.getElementById('reddit');
const discordIcon = document.getElementById('discord');

githubIcon.addEventListener('click', function() {
    // Action to perform when the icon is clicked
    window.open('https://github.com', '_blank'); // Opens GitHub in a new tab
});

youtubeIcon.addEventListener('click', function() {
    // Action to perform when the icon is clicked
    window.open('https://www.youtube.com', '_blank'); // Opens GitHub in a new tab
});

spotifyIcon.addEventListener('click', function() {
    // Action to perform when the icon is clicked
    window.open('https://open.spotify.com', '_blank'); // Opens GitHub in a new tab
});

redditIcon.addEventListener('click', function() {
    // Action to perform when the icon is clicked
    window.open('https://www.reddit.com', '_blank'); // Opens GitHub in a new tab
});

discordIcon.addEventListener('click', function() {
    // Action to perform when the icon is clicked
    window.open('https://discord.com/channels/@me', '_blank'); // Opens GitHub in a new tab
});
  
  window.onload = function(){
    displayDate();
    displayTime();
  }
  
  setInterval(displayTime, 60000);