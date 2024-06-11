const express = require('express');
const getZodiacSign = require('horoscope').getZodiac;
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let links = ``;
    const currentYear = new Date().getFullYear();
    for(let year=currentYear; year>1990; year--)  links += `<li><a href="http://localhost:3000/horoscope/${year}">${year}</a></li>\n`;

    const list = `
        <h1>Find out your Zodiac sign !</h1>
        <h2>Click on a year and get the associated Zodiac sign, for example : 1998 is the ${getZodiacSign(1998)}'s year !</h2>
        <ul>
            ${links}
        </ul>
    `;

    res.status(200).send(list)
})

// TO-DO : comparer avec le calendrier lunaire pour obtenir un résultat plus précis 
// (ex: Janvier 2016 -> toujours dans l'année de la chèvre (Goat) et non année du coq (Rooster))
app.get('/horoscope/:birthdate', (req, res) => {
    const date = new Date(req.params.birthdate);
    if(!isNaN(date)) {
        const year = date.getFullYear()
        res.status(200).send(getZodiacSign(year))
    }
    else res.status(400).send('Invalid date format !');
})

app.get('*', (req, res)=> {
    const notFound = `
        <h1>Page not Found</h1>
        <a href="http://localhost:3000">Go back to Home Page</a>
    `;
    res.status(404).send(notFound)
})

app.listen(port, () => {
  console.log(`Horoscope app listening on port ${port}`)
})

module.exports = app;