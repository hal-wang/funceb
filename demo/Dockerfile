FROM node:14.16
ADD . /app/
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]

# docker build -t funceb_demo:latest .
# docker run -d -p 3000:3000 funceb_demo