const suggestions = (matches, term) => {
  const $suggestions = document.createElement('div')

  $suggestions.append(
    ...matches.map(({ text: match }) => {
      const $match = document.createElement('div')
      const $term = document.createElement('span')
      const $suggested = document.createElement('span')
      $suggested.classList.add('suggested')

      $term.textContent = term
      $suggested.textContent = match.slice(term.length)

      $match.append($term, $suggested)
      return $match
    })
  )

  return $suggestions
}

const listen = words => {
  $input = document.querySelector('[name=term]')

  $input.addEventListener('keyup', ({ target: { value: term } }) => {
    $suggestions = document.querySelector('#suggestions')
    $suggestions.innerHTML = ''
    if (term) {
      $suggestions.appendChild(
        suggestions(words.filter(({ text }) => text.startsWith(term)), term)
      )
    }
  })
}

fetch('/words')
  .then(res => res.json())
  .then(words => listen(words))
