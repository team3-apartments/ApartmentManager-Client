<<<<<<< HEAD
FROM node:10 as user
COPY . .
RUN npm install
RUN npm install -g serve
RUN npm run build --production
EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/serve", "-l", "3000", "-s", "build"]
=======
FROM node:10
COPY . .
RUN npm install 
RUN npm install -g serve
RUN npm run build --production
ENTRYPOINT ["/usr/local/bin/serve", "-l", "3000", "-s", "build"]
>>>>>>> 78b2d6cdd504b402017821fb248d7e1c0b72da9b
