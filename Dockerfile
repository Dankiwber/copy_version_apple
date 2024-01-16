FROM nginx:1.25.3-alpine
RUN mkdir /src
COPY /sources /usr/share/nginx/html
CMD ["open", "/usr/share/nginx/html/hello.html"]