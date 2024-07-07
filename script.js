const textarea = document.querySelector('textarea')
const wordsEl = document.getElementById('words')
const charsEl = document.getElementById('chars')

// when user types or paste text, update words count 
textarea.addEventListener('input', e => {
  const text = e.target.value.trim()

  // get all words array (without spaces and line-breaks) using regex
  const words = text.match( /\S+/gm )

  // update result. If words is empty, the value is 0; else counted results
  wordsEl.textContent = words ? words.length : 0
  charsEl.textContent = words ? words.join('').length : 0
})