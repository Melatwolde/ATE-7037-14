const searchButton = document.querySelector('.search-input-icon');
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

// Add an event listener to the search input field
searchInput.addEventListener('input', () => {
  // If the input field is empty, hide the search results
  if (!searchInput.value) {
    searchResults.style.display = 'none';
  }
});






document.addEventListener("DOMContentLoaded", function() {
    const playSrc = "circle-play-svgrepo-com.svg";
    const pauseSrc = "pause-stop-control-svgrepo-com.svg";
  
    const icons = document.querySelectorAll('img[src$="circle-play-svgrepo-com.svg"], img[src$="pause-stop-control-svgrepo-com.svg"]');
  
    icons.forEach(icon => {
        icon.classList.add('vector-icon'); // Ensure the class is added for responsive styles
        icon.addEventListener('click', function() {
            const currentSrc = this.getAttribute('src');
            if (currentSrc.includes(pauseSrc)) {
                this.setAttribute('src', playSrc);
            } else {
                this.setAttribute('src', pauseSrc);
            }
        });
    });
  });
  