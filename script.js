const btn  = document.getElementById('menu-btn');
const menubar  = document.getElementById('menu');
console.log(menubar.classList)

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  menubar.classList.toggle('flex')
  menubar.classList.toggle('hidden')
})