# MusicProgram

A full-stack application for tracking music events and song and associated song lists. It will track the sheet music for each of the songs in an event for each of the participating instruments.

## Setup

Create the mysql database and copy create your secret .env file with the actual connection string
Your .env file should never be checked into the repository.


## Code Setup

One time setup of yarn

One time install of node packages

```shell
npm install --global yarn
```

One time install of node packages

```shell
yarn install
```

## Database

I am using `mysql` as db provider in `schema.prisma` you can change it to your custom db provider


## Prisma2 Schema

after an update your `schema.prisma` run

```shell
yarn db-dev
```

this commands will save your schema into your database

## Build and Run

```shell
yarn generate
yarn dev
```

- build prisma client
- build crud system
- start dev server

`Good work`
