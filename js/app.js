const elHeader = document.querySelector('.site-header');
const elOpenMenuBtn = document.querySelector('.js-opne-header');

if (elOpenMenuBtn) {
  elOpenMenuBtn.addEventListener('click', function() {
  elHeader.classList.toggle('site-header-open')
  })
}