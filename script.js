const textarea = document.querySelector('textarea')
const wordsEl = document.getElementById('words')
const charsEl = document.getElementById('chars')
const spacesEl = document.getElementById('spaces')
const removeMultiSpacesBtn = document.getElementById('remove-spaces-btn')

function countNdUpdateText(text) {
  // get all words array (without spaces and line-breaks) using regex
  const words = text.match( /\S+/gm )
  const spaces = text.match( /\s/gm )

  // update result. If words is empty, the value is 0; else counted results
  wordsEl.textContent = words ? words.length : 0
  charsEl.textContent = text ? text.length : 0
  spacesEl.textContent = spaces ? spaces.length : 0
}

// in textarea, when user types or paste text, update words count 
textarea.addEventListener('input', e => {
  const text = e.target.value 
  countNdUpdateText(text)
})

// remove multi-spaces
removeMultiSpacesBtn.addEventListener('click', () => {
  const result = textarea.value.replace(/[ ]{2,}/gm, ' ')
  textarea.value = result
  countNdUpdateText(result)
})