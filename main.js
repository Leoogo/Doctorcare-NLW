window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() 
{
  showNavOnScroll() 
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section)
{
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha alvo
  //quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  console.log('O topo da seção chegou ou passou da lina?', sectionTopReachOrPassedTargetLine)

  //verificar se a base está a baixo da linha alvo
  //quais dados vou precisar?
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) 
  {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() 
{
  if (scrollY > 0) {
    navigation.classList.add('scroll')  
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() 
{
  if (scrollY > 450) {
    backToTopButton.classList.add('show')  
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 300,
}).reveal(`
  #home,
  #home img,
  #home .stats, 
  #services,
  #services header,
  #services .cards,
  #about,
  #about header,
  #about .content`)



























