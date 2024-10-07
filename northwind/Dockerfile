# i always start with a ready image
FROM node:15-alpine

# create a work dir for the app on the resulting server
# and cd into it
WORKDIR /app

# we need the dependenct list first
COPY package.json ./

# building the dependemcies
RUN npm install

# now i import the source code to the process
COPY ./ ./

# now the app can run
CMD npm start
