const express = require('express');
const getZodiacSign = require('horoscope').getZodiac;
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let links = ``;
    const currentYear = new Date().getFullYear();
    for(let year=currentYear; year>1990; year--)  links += `<a href="http://localhost:3000/horoscope/${year}">${year}</a>\n`;
    const isoFormat = "2002-09-30"
    const stringFormat = "Thu Jan 01 1970 00:00:00 GMT+0000"
    const longFormat = "December 17, 1995 03:24:00"
    const list = `
        <h1 style="margin-left: 25px">Find out your Zodiac sign !</h1>
        <h2>Click on a year and get the associated Zodiac sign, for example : 1998 is the ${getZodiacSign(1998)}'s year !</h2>
        <p style="margin-left: 25px">
            ${links}
        </p>
        <h2>You can also try more detailed date formats such as :</h2>
        <ul>
            <li><a href="http://localhost:3000/horoscope/${isoFormat}">${isoFormat}</a></li>
            <li><a href="http://localhost:3000/horoscope/${stringFormat}">${stringFormat}</a></li>
            <li><a href="http://localhost:3000/horoscope/${longFormat}">${longFormat}</a></li>
        </ul>
        <h2>Want to test your own birthdate ?</h2>
        <p style="margin-left: 25px">localhost:3000/horoscope/{your_birthdate}</p>
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