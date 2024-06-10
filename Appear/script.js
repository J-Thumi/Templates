// JavaScript using Intersection Observer

const lazyLoadSections = document.querySelectorAll('.lazy');

const options = {
  root: null,  // Observe changes relative to entire viewport
  threshold: 0.5  // Load content when 50% of the section is visible
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');  // Add animation class or remove 'lazy'
      observer.unobserve(entry.target);    // Unobserve after loading
    }
  });
}, options);

lazyLoadSections.forEach(section => {
  observer.observe(section);
});