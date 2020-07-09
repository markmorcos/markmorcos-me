const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('../build'))

app.get('/api/*', (req, res) => {
  res.json({ data: 'api' })
})

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.listen(3000, () => console.log('Server is running on localhost:3000'))
