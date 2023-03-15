# Authorization with Json Web Token using Node JS, typescript, express, mariadb (using docker container)

\*\*\* This project was built by using the above stack. This will help you to learn how to connect to the maridb (run on top of docker container)

## Fontend setup

## Backend setup

## Setup mariadb with docker contaienr

```

docker run --name sql-maria -e MYSQL_ROOT_PASSWORD=1 -p 3003:3306 -d mariadb

Check the connetion using sql client
Run the follow command: mysql --host 127.0.0.1 -P 3003 -u root -p1

```
