## RF Word Counter

Simple **word counter** web app. When the user types or pastes any text, the app counts the number of words and characters in the textarea. Words exclude spaces and line breaks, while characters include everything.

It is a part of my vanilla js projects. Developed by **Rahat Faruk** (me). 
  - Live link: [rf-word-counter.netlify.app](https://rf-word-counter.netlify.app) 
  - Read [my explanation article on dev.to](https://dev.to/rahatfaruk/rf-word-counter-3jph) 

**Tech**: html, css and javascript.

### Steps (js):
1. Get all important elements.
2. Add the `input` event to the textarea to count words immediately after typing or pasting text.
3. Get the text inside the textarea.
4. Get an array of all words (excluding spaces and line breaks) and store it in the `words` variable. Use `text.match( /\S+/gm )`. Explanation of the regex:
  - `g` flag means global match.
  - `m` flag means multi-line.
  - `\S` matches any non-whitespace character.
  - `+` matches the previous token one or more times.
5. Get an array of all spaces. Use `text.match( /\s/gm )`. Spaces includes line breaks.
6. Calculate the results. If the textarea is empty, `words` is `null`; otherwise, it's an array. Return `0` for `null`, otherwise count the words.
  - Use `words.length` to count words.
  - Use `text.length` to get the total number of characters.
7. Update the UI with the results.