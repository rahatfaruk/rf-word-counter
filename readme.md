## RF Word Counter

Simple **word counter** web app. When user types or paste any text in the textarea, the app counts how many words and characters (excluding spaces and line breaks). 

It is a part of my vanilla js projects. Developed by **Rahat Faruk** (me).

**Tech**: html, css and javascript.

### Steps (js):
1. Get all important elements
2. we want to count words immediately after typing or pasting text into textarea. So, we add `input` event to the textarea.
3. get text inside textarea. use `text.trim()` method to remove extra spaces from the start and end of the text.
4. get array of all words (without spaces and line-breaks) using regex and put inside `words` variable. Use `text.match(regex)` method to get array of matched results. The regex is ` /\S+/gm `
  - The regex flags at the end: 'g' means global match; 'm' means multi-lines.
  - `\S` matches any non-whitespace character
  - `+` matches the previous token between one and unlimited times
5. update results. If textarea doesn't contain any chars, the `words` is null; otherwise it's an array. So, for `null` value, we show `0`. Otherwise, we count and show the results. 
  - use `words.length` to count words
  - join all words inside `words` array using `words.join('')`; get the legth of resulting string to count characters. 

