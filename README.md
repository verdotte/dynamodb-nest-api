# DYNAMODB NEST API

## Description

The DynamoDB Nest API is a basic RESTFUL API that implements all the CRUD operations 

## Technologies used

- NestJS
- DynamoDB
- Docker


## Setup

- Clone the repo

```bash
$ npm install
```

## Running the app

- Make sure to have Docker installed
- Pull DynamoDB docker image: `docker pull amazon/dynamodb-local`
- Run DynamoDB locally using docker: `docker run -p 8000:8000 amazon/dynamodb-local`
- Set up AWS credentials: `aws configure`
- Copy `.env.example` to `.env ` then set the port
- Install packages: `npm install` or `yarn install`
- Create table: `aws dynamodb create-table --cli-input-json file://script.json --endpoint-url http://localhost:8000`
- Run the app: `npm run stat:dev` or `yarn start:dev`


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov