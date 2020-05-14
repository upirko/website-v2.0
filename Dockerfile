FROM node:lts-alpine as build-front
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
ENV VUE_APP_I18N_LOCALE="ru"
ENV VUE_APP_I18N_FALLBACK_LOCAL="ru"
ENV VUE_APP_BACKEND_URL=""
ENV VUE_APP_RECAPTCHA_SITEKEY=""
RUN npm run build

FROM node:lts-alpine as build-app
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend .
COPY --from=build-front /app/dist /app/public
EXPOSE 8080
ENV PORT="8080"
ENV mailHost="smtp.yandex.ru"
ENV mailPort="465"
ENV mailUser=""
ENV mailPass=""
ENV mailUploadsDir="uploads/"
ENV emailFrom=""
ENV emailTo=""
ENV reCaptchaSecretKey=""
CMD /app/bin/www
