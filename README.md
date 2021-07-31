# MusicProgram

A full-stack application for tracking music events and song and associated song lists. It will track the sheet music for each of the songs in an event for each of the participating instruments.

It uses pal.js and an Apollo GraphQL server and a Prisma2 generated client. Queries and mutations are generated using Nexus.


## Current State

Added a "yarn seed-dev" command to seed a dev database with sample data

The GraphQL API Server compiles and runs and proides an Admin interface to view the GraphQL schema and run queries.
The GraphQL Playground runs GraphQL Queries and displays data.


## Setup

Create an empty mysql database schema
Copy the "env.example" file (which is publicly viewable) into a .env file that you create.
Your ".env" file must never become publicly viewable since it will contain your actual database connection string.
Your .env file should never be checked into a code repository like GitHub


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


## Prisma2 Create DB Schema

After any update to your `schema.prisma` file you will need to update your database schema by running:

```shell
yarn db-dev
```

This commands will save your schema changes into your database in a process called a migration. You will be prompted to enter a name for that migration step. The migration name should reflect the idea behind your schema.prisma file change.



## Seed your dev database with data from the seed.ts script

```shell
yarn seed-dev
```


## Build and Run

```shell
yarn generate
yarn dev
```

- build prisma client
- build crud system
- start dev server

`Good work`


## Run a GraphQL Query in Playgound

Open http://localhost:4000/ to view the GraphQL Playground

Enter this query

```
query UserList {
  
  findFirstUser {
    id
    name
    email
    createdAt
    updatedAt
  }
}
```

Click the center run button. If you have run yarn seed-dev you will have that that is displayed to the right of the run button.


