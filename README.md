# MusicProgram

A full-stack application for tracking music events and song and associated song lists. It will track the sheet music for each of the songs in an event for each of the participating instruments.

It uses pal.js and an Apollo GraphQL server and a Prisma2 generated client. Queries and mutations are generated using Nexus.


## Current State
The GraphQL API Server compiles and runs and proides an Admin interface to view the GraphQL schema and run queries.



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

Create an empty mysql database and give a user permissions to connect and operate on that database.

I am using `mysql` as db provider in `schema.prisma`.


## Prisma2 Schema

After any update to your `schema.prisma` you will want to update your database schema by running:

```shell
yarn db-dev
```

this commands will save your schema changes into your database. This is called a migration. You will be prompted to enter a name for that migration step.


## Build and Run

```shell
yarn generate
yarn dev
```

- build prisma client
- build crud system
- start dev server

`Good work`
