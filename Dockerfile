
FROM node:18-alpine
WORKDIR .
COPY . .
CMD ["npm", "run", "dev"]
EXPOSE 3000