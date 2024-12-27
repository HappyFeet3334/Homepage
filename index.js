function displayTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    let formattedTime = `${hours}:${minutes}`;
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
  
  window.onload = function(){
    displayDate();
    displayTime();
  }
  
  setInterval(displayTime, 60000);