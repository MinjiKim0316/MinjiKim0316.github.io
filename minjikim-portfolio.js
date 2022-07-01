'use strict';

const navbar = document.querySelector('#k-navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Navbar Toggle button
const navbarToggleBtn = document.querySelector('.k-navbar-toggle-btn');
const navMenu = document.querySelector('.k-nav-menu');
navbarToggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.k-navbar-menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// "contact me" button
const homeContactBtn = document.querySelector('.k-home-contact');
homeContactBtn.addEventListener('click',() => {
  scrollIntoView('#k-contact');
});

// make transparent home
const home = document.querySelector('.k-home-container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrow up
const arrowUp = document.querySelector('.k-arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//"arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#k-home');
});

// Projects
const workBtnContainer = document.querySelector('.k-work-categories');
const projectContainer = document.querySelector('.k-work-projects');
const projects = document.querySelectorAll('.k-project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  const active = document.querySelector('.k-category-btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if(filter ==='*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"});
}

const sectionIds = ['#k-home', '#k-about', '#k-skills', '#k-work', '#k-contact'];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    console.log(entry.target);
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));