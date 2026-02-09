FROM nginx:alpine
COPY public/ /usr/share/nginx/html/
COPY sources/ /usr/share/nginx/html/sources/