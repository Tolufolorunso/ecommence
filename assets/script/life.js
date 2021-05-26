const menu = document.querySelector('.hambuger')
const mobileNav = document.querySelector('.mobile-nav')

menu.addEventListener('click', (e) => {
  mobileNav.classList.toggle('open')
  e.stopPropagation()
})

document.body.addEventListener('click', (e) => {
  mobileNav.classList.remove('open')
  e.stopPropagation()
})
