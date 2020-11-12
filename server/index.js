const express = require('express')
const path = require('path')
const cors = require("cors");
const staticDir = path.join(__dirname, "..\\client");

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.static(staticDir));

app.get('/', (req, res) => {
    res.sendFile(`${staticDir}/index.html`)
})

app.get('/contact', (req, res) => {
    res.sendFile(`${staticDir}/contact.html`);
})

app.get("/merch", (req, res) => {
	res.sendFile(`${staticDir}/merch.html`);
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})