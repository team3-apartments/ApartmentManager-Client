FROM node:10
COPY . .
RUN npm install 
RUN npm install -g serve
RUN npm run build --production
ENTRYPOINT ["/usr/local/bin/serve", "-l", "3000", "-s", "build"]