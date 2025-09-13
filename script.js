const dropDownMenu = document.querySelector('.dropdownmenu');

const dropDownContent = document.querySelector('.dropdowncontent');

const topbar = document.querySelector('.topbar');

dropDownMenu.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active');
    dropDownContent.classList.toggle('active')
    topbar.classList.toggle('active');
})

document.querySelectorAll('.dropdowncontent a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.dropdowncontent').classList.remove('active');
    document.querySelectorAll('.dropdownmenu').classList.remove('active');
    document.querySelectorAll('.topbar').classList.remove('active');
  });
});

async function loadFragment(id, file) {
  const res = await fetch(file);
  if (res.ok) {
    const text = await res.text();
    document.getElementById(id).innerHTML = text;
  } else {
    console.error(`Fehler beim Laden von ${file}`);
  }
}

// Header und Footer laden
loadFragment("site-header", "header.html");
loadFragment("site-footer", "footer.html");