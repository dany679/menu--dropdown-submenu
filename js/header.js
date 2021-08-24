const btnMobile = document.querySelector('.burger');
function toggleMenu(event) {
  console.log('foi');
  event.type === 'touchstart' && event.preventDefault();
  //   const navLinks = document.querySelector('nav');
  //   const navLiPrincipal = document.querySelectorAll('ul.navigation-links li a');
  //   navLinks.classList.toggle('active');
  //   navLiPrincipal.forEach((li, index) => {
  //     li.style.animation = li.style.animation
  //       ? ''
  //       : ` navLinkFade .3 ease  ${index / navLiPrincipal.length + 1.4}s`;
  //   });
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');

  //   btnMobile.addClass = 'active';
  //   const active = nav.classList.contains('active');
  //   event.currentTarget.setAttribute('aria-expanded', active);
  //   if (active) {
  //     event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  //   } else {
  //     event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  //   }
}

const initialApp = () => {
  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);
};
initialApp();
