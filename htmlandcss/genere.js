const searchButton = document.querySelector('.vector-icon5');
const searchInput = document.querySelector('.search');
const resultsList = document.querySelector('.results');
const searchResults = document.querySelector('.search-results');

// Add an event listener to the search button
searchButton.addEventListener('click', () => {
  // Get the search query from the input field
  const query = searchInput.value;

  // Make sure the query is not empty
  if (query) {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '6797551cf07dc3e1736ab1eca6ab1029';

    // Make a request to the Last.fm API
    fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=${apiKey}&format=json`)
    .then(response => response.json())
    .then(data => {
      // Clear the results list
      resultsList.innerHTML = '';

      // Add each track to the results list
      data.results.trackmatches.track.forEach(track => {
        const listItem = document.createElement('li');
        listItem.textContent = track.name;
        resultsList.appendChild(listItem);
      });

      // Show the search results
      searchResults.style.display = 'flex';
    })
    .catch(error => {
      // Log any errors to the console
      console.error('Error:', error);
    });
  }
});
searchInput.addEventListener('input', () => {
  // If the input field is empty, hide the search results
  if (!searchInput.value) {
    searchResults.style.display = 'none';
  }
});


window.addEventListener('DOMContentLoaded', function() {
  const icons = document.querySelectorAll('.icon');

  icons.forEach(icon => {
      icon.addEventListener('click', function() {
          if (this.src.endsWith('circle-play-svgrepo-com.svg')) {
              this.src = 'pause-stop-control-svgrepo-com.svg';
          } else if (this.src.endsWith('pause-stop-control-svgrepo-com.svg')) {
              this.src = 'circle-play-svgrepo-com.svg';
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const playIcon = document.querySelector(".play-icon"); // replace with your actual selector
  const pauseIcon = document.querySelector(".pause-icon"); // replace with your actual selector

  function swapIcons(icon1, icon2) {
    const tempSrc = icon1.src;
    const tempWidth = icon1.style.width;
    const tempHeight = icon1.style.height;

    icon1.src = icon2.src;
    icon1.style.width = icon2.style.width;
    icon1.style.height = icon2.style.height;

    icon2.src = tempSrc;
    icon2.style.width = tempWidth;
    icon2.style.height = tempHeight;
  }

  playIcon.addEventListener('click', function() {
    swapIcons(playIcon, pauseIcon);
  });

  pauseIcon.addEventListener('click', function() {
    swapIcons(pauseIcon, playIcon);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var firstCircleIcon = document.querySelector(".first-circle-icon");
  
  firstCircleIcon.addEventListener("click", function() {
    var currentIcon = firstCircleIcon.getAttribute("src");
    var newIcon = "";
    
    if (currentIcon === "circle-play-svgrepo-com.svg") {
      newIcon = "pause-stop-control-svgrepo-com.svg";
    } else {
      newIcon = "circle-play-svgrepo-com.svg";
    }
    
    firstCircleIcon.setAttribute("src", newIcon);
  });
});