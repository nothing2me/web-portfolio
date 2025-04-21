document.addEventListener('DOMContentLoaded', () => {
  // Toggle class 'active' on click
  const centeredText = document.querySelector('.centered-text');
  centeredText.addEventListener('click', () => {
    centeredText.classList.toggle('active');
  });

  // Set audio volume
  var audio = document.getElementById("myaudio");
  audio.volume = 0.2;

  // Toggle blinking animation
  function toggleBlink() {
    const lineAnimation = document.querySelector('.line-animation');
    lineAnimation.classList.add('blink-animation');

    setTimeout(() => {
      lineAnimation.classList.remove('blink-animation');
    }, 4000); // Adjust the time to match the animation duration and repeat count
  }

  // Get references to the elements
  const galleryItems = document.querySelectorAll('.gallery-item');
  const enlargedImageContainer = document.getElementById('enlarged');
  const enlargedImage = document.getElementById('enlarged-img');

  // Function to show the enlarged image
  function showImage(imageSrc) {
    enlargedImage.src = imageSrc;
    enlargedImageContainer.classList.add('show');
  }

  // Function to hide the enlarged image
  function hideImage() {
    enlargedImageContainer.classList.remove('show');
  }

  // Attach event listeners to gallery items
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imageSrc = item.getAttribute('src');
      showImage(imageSrc);
    });
  });

  // Attach event listener to hide the enlarged image
  enlargedImageContainer.addEventListener('click', hideImage);
});

