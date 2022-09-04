const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
   selectElement('header').classList.toggle('active');
});


// const navigationHeight = document.querySelector('header').offsetHeight;

// document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");