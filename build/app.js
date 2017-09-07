const express = require('express')
const path = require('path')
let app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, 'src/index.html'));
})

let port = process.env.PORT || 1337
app.listen(port, () => {
		console.log("Please come find me at port " + port + "!")
})
