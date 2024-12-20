const { observerOptions, factItems, observer } = require("./script");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class to make the text appear gradually
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing the element after it's visible
        }
    });
}, observerOptions);

// Observe each fact item
factItems.forEach(item => {
    observer.observe(item);
});
