const express = require('express')

const app = express()

app.get('/words', (req, res) => {
  res.send([
    { text: 'Tomato' },
    { text: 'Tomato Soup' },
    { text: 'Tomatoes are considered harmful' }
  ])
})

app.use(express.static('./public'))

app.listen(3000)
