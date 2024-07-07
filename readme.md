## RF Word Counter

Simple **word counter** web app. When user types or paste any text in the textarea, the app counts how many words and characters (excluding spaces and line breaks). 

It is a part of my vanilla js projects. Developed by **Rahat Faruk** (me). 
  - Live link: [rf-word-counter.netlify.app](https://rf-word-counter.netlify.app) 
  - Read [my explanation article on dev.to](https://dev.to/rahatfaruk/rf-word-counter-3jph) 

**Tech**: html, css and javascript.

### Steps (js):
1. Get all important elements.
2. Add the `input` event to the textarea to count words immediately after typing or pasting text.
3. Get the text inside the textarea.
4. Use `text.match(/\S+/gm)` to get an array of all words (excluding spaces and line breaks) and store it in the `words` variable. Explanation of the regex:
  - `g` flag means global match.
  - `m` flag means multi-line.
  - `\S` matches any non-whitespace character.
  - `+` matches the previous token one or more times.
5. Calculate the results. If the textarea is empty, `words` is `null`; otherwise, it's an array. Return `0` for `null`, otherwise count the words.
  - Use `words.length` to count words.
  - Use `text.length` to get the total number of characters.
6. Update the UI with the results.