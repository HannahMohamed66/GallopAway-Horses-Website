
// Listen for scroll events
window.addEventListener('scroll', function () {
  try {
      const nav = document.querySelector('nav');
      if (nav) {
          if (window.scrollY > 0) {
              nav.classList.add('scrolled'); // Add class when scrolled down
          } else {
              nav.classList.remove('scrolled'); // Remove class when at the top
          }
      } else {
          console.warn("Navigation bar element not found.");
      }
  } catch (error) {
      console.error("Error handling scroll event:", error);
  }
});


// Handle video play/pause
try {
  const video = document.getElementById('myVideo');
  if (video) {
      // Intersection Observer for the video to play/pause
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  video.play();
              } else {
                  video.pause();
              }
          });
      }, {
          threshold: 0.1 // Start video when 10% of it is visible
      });

      observer.observe(video);
  } else {
      console.warn("Video element with ID 'myVideo' not found.");
  }
} catch (error) {
  console.error("Error setting up video observer:", error);
}

// Image slider functionality
try {
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  if (next && prev) {
      next.addEventListener('click', function () {
          try {
              const items = document.querySelectorAll('.item');
              const slide = document.querySelector('.slide');
              if (items.length > 0 && slide) {
                  slide.appendChild(items[0]);
              } else {
                  console.warn("No items found or slide container missing.");
              }
          } catch (error) {
              console.error("Error handling 'next' button click:", error);
          }
      });

      prev.addEventListener('click', function () {
          try {
              const items = document.querySelectorAll('.item');
              const slide = document.querySelector('.slide');
              if (items.length > 0 && slide) {
                  slide.prepend(items[items.length - 1]);
              } else {
                  console.warn("No items found or slide container missing.");
              }
          } catch (error) {
              console.error("Error handling 'prev' button click:", error);
          }
      });
  } else {
      console.warn("Next or Previous button not found.");
  }
} catch (error) {
  console.error("Error setting up image slider:", error);
}

//About Us Section

document.querySelectorAll('.show-more-btn').forEach((button) => {
  button.addEventListener('click', function() {
      const imageItem = this.closest('.image-item');
      const longText = imageItem.querySelector('.long-text');
      // Toggle the visibility of the long text
      longText.style.display = longText.style.display === 'block' ? 'none' : 'block';
      
      // Change the button text based on the visibility of the long text
      this.textContent = longText.style.display === 'block' ? 'Show Less' : 'Show More';
  });
});

document.querySelectorAll('.show-more-btn').forEach((button) => {
  button.addEventListener('click', function() {
      const imageItem = this.closest('.image-items');
      const longText = imageItem.querySelector('.long-texts');
      
      // Toggle the visibility of the long text
      longText.style.display = longText.style.display === 'block' ? 'none' : 'block';
      
      // Change the button text based on the visibility of the long text
      this.textContent = longText.style.display === 'block' ? 'Show Less' : 'Show More';
  });
});

document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const imageItem = button.closest('.image-item');
        imageItem.classList.toggle('active');
    });
});



document.querySelectorAll('.show-more-btn').forEach((button) => {
  button.addEventListener('click', function() {
      const imageItem = this.closest('.image-item3');
      const longText = imageItem.querySelector('.long-text3');
      
      // Toggle the visibility of the long text
      longText.style.display = longText.style.display === 'block' ? 'none' : 'block';
      
      // Change the button text based on the visibility of the long text
      this.textContent = longText.style.display === 'block' ? 'Show Less' : 'Show More';
  });
});

document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const imageItem = button.closest('.image-items');
        imageItem.classList.toggle('active');
    });
});

document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const imageItem = button.closest('.image-item3');
        imageItem.classList.toggle('active');
    });
});



