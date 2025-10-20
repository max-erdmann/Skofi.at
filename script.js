const hamMenu = document.querySelector('.hammenu');

const offScreenMenu = document.querySelector('.offscreenmenu');

const homeButton = document.querySelector('.logobuttonhammenu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

homeButton.addEventListener('click', () => {
  hamMenu.classList.remove('active');
  offScreenMenu.classList.remove('active');
})

document.querySelectorAll('.offscreenmenu a').forEach(link => {
  link.addEventListener('click', () => {
    offScreenMenu.classList.remove('active');
    hamMenu.classList.remove('active');
  })
})