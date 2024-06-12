# Horoscope
## Description
Application permettant de récupérer le signe astrologique du calendrier lunaire associé à chaque date de naissance
Une page menu est affichée par défaut pour visualiser certains résultats
La route /horoscope/:birthdate est aussi accessible directement

## Pré-requis
Installer node et docker
Lancer la commande `npm i` à la racine du projet

## Lancer l'application depuis un terminal
`npm run dev`

## Lancer les tests depuis un terminal
`npm run test`

## Lancer l'application dans un container docker
Construction de l'image `docker build -t horoscope-1 .`\
Montage du container `docker run -dp 127.0.0.1:3000:3000 horoscope-1`

## Lancer les tests dans un container docker
Construction de l'image `docker build -t horoscope-tests-1 -f Dockerfile-tests .`\
Montage du container `docker run horoscope-tests-1`
