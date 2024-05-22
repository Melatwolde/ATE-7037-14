const searchButton = document.querySelector('.vector-icon4');
const searchInput = document.querySelector('.search');
const resultsList = document.querySelector('.results');
const searchResults = document.querySelector('.search-results');

// Add an event listener to the search button
searchButton.addEventListener('click', () => {
  // Get the search query from the input field
  const query = searchInput.value;
  if (query) {
    const apiKey = '6797551cf07dc3e1736ab1eca6ab1029';
    fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=${apiKey}&format=json`)
    .then(response => response.json())
    .then(data => {
      resultsList.innerHTML = '';

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




window.onload = ("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.vector-icon6, .vector-icon7, .vector-icon8, .vector-icon9, .vector-icon10');
    const playSrc = "circle-play-svgrepo-com.svg";
    const pauseSrc = "pause-stop-control-svgrepo-com.svg";

    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            const currentSrc = this.src;
            if (currentSrc.includes(pauseSrc)) {
                this.src = playSrc;
            } else {
                this.src = pauseSrc;
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const image18 = document.querySelector(".image-18-icon");
  const image15 = document.querySelector(".image-15-icon");
  const image19 = document.querySelector(".image-19-icon");
  const image17 = document.querySelector(".image-17-icon");
  const image20 = document.querySelector(".image-20-icon");

  function swapImages(image) {
      const tempSrc = image.src;
      const tempWidth = image.style.width;
      const tempHeight = image.style.height;

      image.src = image18.src;
      image.style.width = image18.style.width;
      image.style.height = image18.style.height;

      image18.src = tempSrc;
      image18.style.width = tempWidth;
      image18.style.height = tempHeight;
  }
  image15.addEventListener("mouseenter", ()=> swapImages(image15));
  image15.addEventListener("click", ()=> swapImages(image15));
  image19.addEventListener("mouseenter", () => swapImages(image19));
  image19.addEventListener("click", () => swapImages(image19));

  image17.addEventListener("mouseenter", () => swapImages(image17));
  image17.addEventListener("click", () => swapImages(image17));

  image20.addEventListener("mouseenter", () => swapImages(image20));
  image20.addEventListener("click", () => swapImages(image20));
});


document.addEventListener("DOMContentLoaded", function() {
  // Select all the SVG icons that need to be toggled
  const svgIcons = document.querySelectorAll('img[src="pause-stop-control-svgrepo-com.svg"]');

  // Function to toggle the SVG icon source
  function toggleIcon(event) {
    const icon = event.target;
    if (icon.src.includes("pause-stop-control-svgrepo-com.svg")) {
      icon.src = "circle-play-svgrepo-com.svg";
    } else {
      icon.src = "pause-stop-control-svgrepo-com.svg";
    }
    

  }

  // Add click event listeners to each of the selected SVG icons
  svgIcons.forEach(icon => {
    icon.addEventListener("click", toggleIcon);
  });

});

document.addEventListener("DOMContentLoaded", function() {
  // Select all the SVG icons that need to be toggled
  const svgIcons1 = document.querySelectorAll('img[src="circle-play-svgrepo-com.svg"]');

  // Function to toggle the SVG icon source
  function toggleIcon(event) {
      const icon = event.target;
      if (icon.src.includes("circle-play-svgrepo-com.svg")) {
          icon.src = "pause-stop-control-svgrepo-com.svg";
      } else {
          icon.src = "circle-play-svgrepo-com.svg";
      }
  }

  // Add click event listeners to each of the selected SVG icons
  svgIcons1.forEach(icon => {
      icon.addEventListener("click", toggleIcon);
  });
});


