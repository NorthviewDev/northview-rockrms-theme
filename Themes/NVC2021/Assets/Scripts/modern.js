// Global Scripts
$(function () { // document.ready
  /** * Clickable Card layout ***/
  /** * https://inclusive-components.design/cards/#theredundantclickevent ***/
  const cards = document.querySelectorAll('.masonry-grid__grid-item,.c-tile')
  Array.prototype.forEach.call(cards, card => {
    card.style.cursor = 'pointer'
    let down; let up; let link = card.querySelector('a')
    card.onmousedown = () => down = +new Date()
    card.onmouseup = () => {
      up = +new Date()
      if ((up - down) < 200) {
        link.click()
      }
    }
  })

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })

})
