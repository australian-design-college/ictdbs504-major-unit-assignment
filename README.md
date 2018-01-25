# ICTDBS504 Major Unit Assignment Helper Files

This project contains some helper files for ICTDBS504's Major Unit Assignment.

## Instructions

The `app` directory contains the React app; the `server` directory contains the NodeJS server. You need to hook these up with the database specified in `todos.sql`.

## Development

To start the development docker container:

    docker run \
      -p 0.0.0.0:18002:3306 \
      --name ictdbs504-db \
      -v $(pwd)/ictdbs504-db:/etc/mysql/conf.d \
      -e MYSQL_ROOT_PASSWORD=password \
      -e MYSQL_USER=ictdbs504-dev \
      -e MYSQL_PASSWORD=password \
      -e MYSQL_DATABASE=ictdbs504_users \
      -d mysql:5.7.20
