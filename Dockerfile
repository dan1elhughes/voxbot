FROM gcr.io/google_appengine/nodejs
RUN apt-get -y update && apt-get install -y ffmpeg

COPY . /app/

RUN npm --unsafe-perm install
