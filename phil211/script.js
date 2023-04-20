// get all the images that need to change opacity
const images = document.querySelectorAll('.change-opacity');

// set up the Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      // the image is in the middle of the screen
      entry.target.classList.remove('opacity');
    } else {
      // the image is not in the middle of the screen
      entry.target.classList.add('opacity');
    }
  });
}, { threshold: 0.5 });

// observe each image
images.forEach(image => {
  observer.observe(image);
});