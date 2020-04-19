FROM node:alpine AS build

COPY package.json package-lock.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app

#ENV PATH="./node_modules/.bin:$PATH"

WORKDIR /ng-app

COPY . ./

RUN npm run ng build --prod --output-path=dist

FROM nginx:alpine

ENV PORT 8080
ENV BACKAPI 'https://www.example.com'

## Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

## Copy our default nginx config
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf


## From ‘build’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=build  /ng-app/dist /usr/share/nginx/html

EXPOSE ${PORT}

CMD /bin/sh -c "envsubst '\$PORT \$BACKAPI' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
