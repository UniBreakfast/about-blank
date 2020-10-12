const pairTags = `html body div span section main aside article nav header
  footer b i ul ol li details summary select`.toUpperCase().split(/\s+/g)

const tagInputStyle = {
  fontSize: '50px',
  fontWeight: 'bold',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  background: 'none',
  border: 'none',
  textShadow: ', white 0px 0px 8px'.repeat(5).slice(2),
  color: 'black',
}

onclick = e => {
  if (e.shiftKey && pairTags.includes(e.target.tagName)) {
    const parent = e.target == document.firstElementChild ?
      document.body : e.target
    createTagInput(parent)
  }
}

function createTagInput(parent) {
  const tagInput = document.createElement('input')

  Object.assign(tagInput.style, tagInputStyle)

  document.body.append(tagInput)

  tagInput.focus()


  setTimeout(() => tagInput.remove(), 5000)


  tagInput.onblur = () => tagInput.remove()


  tagInput.onkeydown = e => {
    if (e.key == 'Enter') {
      const el = document.createElement(tagInput.value)

      parent.append(el)

      tagInput.onblur = null

      tagInput.remove()
    }
  }
}
