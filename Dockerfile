FROM node:14

WORKDIR /app
RUN apt-get update && apt-get install -y python2 make g++
COPY package*.json ./
RUN npm install
COPY . .
ENV GATSBY_GA_TRACKING_ID=$GATSBY_GA_TRACKING_ID
ENV GATSBY_MAPBOX_API_TOKEN=$GATSBY_MAPBOX_API_TOKEN
ENV GATSBY_MAPBOX_USER=$GATSBY_MAPBOX_USER
RUN touch .eslintrc
EXPOSE 8000
CMD ["npm", "run", "develop"]
