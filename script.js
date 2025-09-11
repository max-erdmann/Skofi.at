const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

const socials = document.querySelector('.socials');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active')
    socials.classList.toggle('active');
})

document.querySelectorAll('.off-screen-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.off-screen-menu').classList.remove('active');
    document.querySelector('.ham-menu').classList.remove('active');
    document.querySelector('.socials').classList.remove('active');});
});