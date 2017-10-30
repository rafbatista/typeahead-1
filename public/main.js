const suggestions = matches => {
  const $suggestions = document.createElement('div')

  $suggestions.append(
    ...matches.map(match => {
      const $match = document.createElement('div')
      $match.textContent = match.text
      return $match
    })
  )

  return $suggestions
}

const listen = words => {
  $input = document.querySelector('[name=term]')

  $input.addEventListener('keyup', ({ target: { value } }) => {
    $suggestions = document.querySelector('#suggestions')
    $suggestions.innerHTML = ''
    if (value) {
      $suggestions.appendChild(
        suggestions(words.filter(({ text }) => text.startsWith(value)))
      )
    }
  })
}

fetch('/words')
  .then(res => res.json())
  .then(words => listen(words))
