# API REST with Clean Architecture

_Basic API_ without a database that implements the GET, POST, PUT, and DELETE methods following the principles of _Clean Architecture_ with _node vanilla_.

## ✨ Features

- Pure Node.js implementation (no Express/Fastify)
- Clean Architecture separation
- Type-safe JavaScript with JSDoc
- In-memory data persistence
- RESTful conventions
- Proper HTTP status codes

## ROUTES:

    **GET**

| Route       | Headers                    | Query Params / params         |
| ----------- | -------------------------- | ----------------------------- |
| /list-users | Accept: "application/json" | ?name=""&lastName=""&email="" |
| /user/:id   | Accept: "application/json" | id: string                    |

    **POST**

| Route        | Headers                                                       | Body                                         |
| ------------ | ------------------------------------------------------------- | -------------------------------------------- |
| /create-user | Accept: "application/json" & Content-type: "application/json" | {name:string, lastName:string, email:string} |

    **PUT**

| Route            | Headers                                                       | Body                                            |
| ---------------- | ------------------------------------------------------------- | ----------------------------------------------- |
| /update-user/:id | Accept: "application/json" & Content-type: "application/json" | {name?:string, lastName?:string, email?:string} |

    **DELETE**

| Route            | Headers                    |
| ---------------- | -------------------------- |
| /delete-user/:id | Accept: "application/json" |

## HOW TO INSTALL:

````
  mkdir api-crud
  cd api-crud
  git clone <repo-url>
  pnpm i
  docker-compose up -d --build```
