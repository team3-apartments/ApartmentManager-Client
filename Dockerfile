FROM node:10 as user
COPY . .
RUN npm install
RUN npm install -g serve
RUN npm run build --production
EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/serve", "-l", "3000", "-s", "build"]
