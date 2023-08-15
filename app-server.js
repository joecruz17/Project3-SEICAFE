const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.static('public'))
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./seicafe/routes/api/users'));
// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./seicafe/routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./seicafe/routes/api/orders'));

// for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

module.exports = app