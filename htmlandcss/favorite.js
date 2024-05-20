// document.addEventListener("DOMContentLoaded", function() {
//   const classNames = [
//     "vector-icon8",
//     "vector-icon9",
//     "vector-icon10",
//     "vector-icon11",
//     "vector-icon12",
//     "vector-icon13",
//     "vector-icon14"
//   ];

//   classNames.forEach(className => {
//     const images = document.querySelectorAll(`.${className}`);

//     images.forEach(image => {
//       image.addEventListener("click", function() {
//         if (this.src.includes(this.dataset.play)) {
//           this.src = this.dataset.pause;
//         } else {
//           this.src = this.dataset.play;
//         }
//       });
//     });
//   });
// });
window.onload = function() {
  const pauseIcon = document.getElementById("pauseIcon");
  const playIcon = document.getElementById("playIcon");

  if (pauseIcon && playIcon) {
    pauseIcon.addEventListener("click", function() {
      pauseIcon.classList.toggle("active");
      playIcon.classList.toggle("active");
    });

    playIcon.addEventListener("click", function() {
      pauseIcon.classList.toggle("active");
      playIcon.classList.toggle("active");
    });
  } else {
    console.log('Elements with id "pauseIcon" or "playIcon" not found');
  }
};



document.addEventListener('DOMContentLoaded', function () {
  const playPauseImages = document.querySelectorAll('img[src="circle-play-svgrepo-com.svg"], img[src="pause-circle-svgrepo-com(1).svg"]');

  playPauseImages.forEach(img => {
    img.addEventListener('click', function () {
      const playSrc = "circle-play-svgrepo-com.svg";
      const pauseSrc = "pause-circle-svgrepo-com(1).svg";
      img.src = (img.src.includes(playSrc)) ? pauseSrc : playSrc;
    });
  });
});




// window.onload = function() {
//   const icon = document.querySelector(".vector-icon5");

//   icon.addEventListener("click", function() {
//     const playSrc = icon.getAttribute("data-play");
//     const pauseSrc = icon.getAttribute("data-pause");

//     if (icon.src.includes(playSrc)) {
//       icon.src = pauseSrc;
//     } else {
//       icon.src = playSrc;
//     }
//   });
// };

// window.onload = function() {
//   const icons = document.querySelectorAll(".vector-icon9, .vector-icon10, .vector-icon11, .vector-icon12, .vector-icon13, .vector-icon14");

//   icons.forEach(icon => {
//     icon.addEventListener("click", function() {
//       const playSrc = icon.getAttribute("data-play");
//       const pauseSrc = icon.getAttribute("data-pause");

//       if (icon.src.includes(playSrc)) {
//         icon.src = pauseSrc;
//       } else {
//         icon.src = playSrc;
//       }
//     });
//   });
// };
