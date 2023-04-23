const ids = [
  'sky',
  'rocks',
  'multiHeaders',
  'lighthouseInWater',
  'lightParagraph',
  'darkParagraph'
]

function toggleClasses() {

  let html = document.querySelector('html')

  html.lang ? html.removeAttribute('lang') : html.setAttribute('lang', 'en-US')

  const head = document.head

  const title = head.querySelector('title')
  if (title) {
    title.remove()
  }
  else {
    document.head.innerHTML += ' <title>Lighthouse</title>'
  }

  const viewportMeta = document.getElementById('viewportName')

  if (viewportMeta.attributes.getNamedItem('user-scalable')) {
    viewportMeta.removeAttribute('user-scalable')
    viewportMeta.setAttribute('maximum-scale', '5')
  }
  else {
    viewportMeta.setAttribute('user-scalable', 'no')
    viewportMeta.setAttribute('maximum-scale', '4')
  }

  const button = document.getElementById('coolButton')

  if (button) {
    button.id = 'button'
  }
  else {
    document.getElementById('button').id = 'coolButton'
  }


  document.body.ariaHidden = document.body.ariaHidden == 'true' ? 'false' : 'true'

  const lightHouseIcon = document.getElementById('lighthouseButton').querySelector('i')

  lightHouseIcon.classList.toggle('mdi-lighthouse')
  lightHouseIcon.classList.toggle('mdi-lighthouse-on')

  ids.forEach(id => {

    const element = document.getElementById(id)

    const addedBad = element.classList.toggle(`${id}-bad`)

    const addedGood = element.classList.toggle(`${id}-good`)

    if (id == 'multiHeaders') {
      const tags = Array.from(element.children)
      let sortedTags;
      // @ts-ignore
      if (addedGood) {
        sortedTags = tags.sort((a, b) => parseInt(a.tagName[1]) - parseInt(b.tagName[1]))
      }
      else {
        sortedTags = Array.from(tags).sort(() => getRandomNum())
      }
      sortedTags.forEach(e => element.appendChild(e))

    }

    if (element.tagName == 'IMG') {
      // @ts-ignore
      element.alt = addedBad ? '' : `${id} image`
    }
  })
}

function getRandomNum() {
  let num = Math.floor(Math.random() * (3) + -1)
  return num
}

function notifyUser(lovesLighthouse) {
  window.alert(lovesLighthouse ? '♥♥♥' : '😭😭😭')
}