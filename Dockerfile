FROM node:10 as user
RUN npm install -g serve
ENTRYPOINT ["/usr/local/bin/serve", "-l", "3000", "-s", "build"]
EXPOSE 3000
COPY package.json package.json

RUN npm install
COPY . .
RUN npm run build --production
