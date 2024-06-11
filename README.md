# Horoscope
## Lancer l'application depuis un terminal
`npm run dev`

## Lancer les tests depuis un terminal
`npm run test`

## Lancer l'application dans un container docker
Construction de l'image
`docker build -t horoscope-1 .`
Montage du container
`docker run -dp 127.0.0.1:3000:3000 horoscope-1`

