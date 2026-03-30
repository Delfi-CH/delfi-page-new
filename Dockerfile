FROM node:24-alpine AS build

RUN apk update && apk upgrade && apk add git

RUN git clone https://github.com/Delfi-CH/delfi-page-new.git

WORKDIR /delfi-page-new

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=build /delfi-page-new/docs/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]