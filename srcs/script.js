document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const dropdown = document.querySelector('.dropdown');
    
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      dropdown.classList.toggle('dropdown-active');
    });
  });