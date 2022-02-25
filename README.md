## Description

NestJS Application that takes latitude and longitude and date, and returns the weather description for that location for a given date.
The date must be within the next 7 days.
Date format: 'YYYY-MM-DD'

## Env variables

Example passed in `.env.example` file. Need to fill `.env` by own variables

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

## Execution

API written on GraphQL. To get correct response from server need to run followed query:

```
query {
  weatherReport(lat: 51.509865, lng: -0.118092, date: "2022-02-25"){ description }
}
```

## Test

```bash
$ npm run test
```
