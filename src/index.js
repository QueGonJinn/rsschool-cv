import './index.html'; 
import './index.scss';

const counters = document.querySelectorAll('.skills_loading-percent'),
      lines = document.querySelectorAll('.skills_loading-cl');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

const menu = document.querySelector('.aside');
hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('aside_active');
});