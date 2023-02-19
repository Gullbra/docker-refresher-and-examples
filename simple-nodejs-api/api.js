const express = require('express')
const app = express()

const port = process.env.ENV_API_PORT || 3080

app.route('*').get(res => res.send('👋 Hello World!'))

app.listen(port, () => console.log(`📡 listening to http://localhost:${port}`))