/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close')

  // SHOW
toggleMenu.addEventListener('click', () => { 
  navMenu.classList.toggle('show')
 })

// HIDDEN 
closeMenu.addEventListener('click', () => { 
  navMenu.classList.remove('show')
 })

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  navMenu.classList.remove('show')
}
navLink.forEach( n=> n.addEventListener('click', linkAction) )

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach( current=> {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop

    sectionId = current.getAttribute('id')
    if ( scrollY > sectionsTop && scrollY <= sectionsTop + sectionHeight ) {
      document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active')
    }else {
      document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active')
    }
  })
}

/*========== active class ===========*/


const menu = document.querySelector(".nav__list");

menu.addEventListener('click', function(e) {
    
    const targetMenu = e.target;
    
    if(targetMenu.classList.contains('nav__link')) {
        const menuLinkActive = document.querySelector("ul li a.active");
        if(menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {
            menuLinkActive.classList.remove('active');
        }
        targetMenu.classList.add('active');
    }
});

