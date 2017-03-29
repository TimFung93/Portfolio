const express = require('express');
const app = express();


const PORT = 8080;

app.use(express.static('public'))


app.listen(PORT, function() {
	console.log('Server has started on http://localhost:' + PORT)
	console.log('Press CTRL + C to kill server')
})