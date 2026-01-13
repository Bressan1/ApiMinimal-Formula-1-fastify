# Minimal F1 API (Fastify)

A minimal **Formula 1 REST API** built with **Fastify** and **TypeScript**.
This project exposes simple **GET endpoints** to retrieve **teams** and **drivers**, using in-memory data only.

The goal of this API is to serve as a **learning project**, **mock backend**, or **technical portfolio example** for Node.js + Fastify.

---

## Features

* ⚡ Fastify with logging enabled
* 🌐 CORS enabled (open origin)
* 📦 In-memory data (no database)
* 🔎 Simple REST endpoints
* 🧩 Typed route params (TypeScript)

---

## Tech Stack

* **Node.js**
* **Fastify**
* **TypeScript**
* **@fastify/cors**

---

## Requirements

* Node.js 18+
* npm / yarn / pnpm

---

## Running the Project

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npm run dev
```

The API will be available at:

```
http://localhost:3333
```

---

## API Endpoints

### Get All Teams

**GET** `/teams`

Response:

```json
{
  "teams": [
    {
      "id": 1,
      "name": "Ferrari",
      "base": "Maranello, Itália"
    }
  ]
}
```

---

### Get All Drivers

**GET** `/drivers`

Response:

```json
{
  "drivers": [
    {
      "id": 1,
      "name": "lewis hamilton",
      "team": "ferrari"
    }
  ]
}
```

---

### Get Driver by ID

**GET** `/drivers/:id`

Returns a single driver by ID.

* `200 OK` if found
* `404 Not Found` if the driver does not exist

Response (success):

```json
{
  "driver": {
    "id": 1,
    "name": "lewis hamilton",
    "team": "ferrari"
  }
}
```

Response (error):

```json
{
  "error": "motorista não encontrado"
}
```

---

## Example Requests

```bash
curl http://localhost:3333/teams
curl http://localhost:3333/drivers
curl http://localhost:3333/drivers/1
curl http://localhost:3333/drivers/99
```

---

## Project Characteristics

* No database (arrays only)
* No authentication
* No pagination
* No environment variables

This is intentional to keep the project **simple and easy to understand**.

---

## Possible Improvements

* Add team → drivers relationship endpoint
* Normalize data using `teamId`
* Add Swagger / OpenAPI documentation
* Add validation (Zod or Fastify schema)
* Add unit tests
* Add pagination and filters

---

## Use Cases

* Backend learning project
* Fastify reference
* Mock API for frontend apps
* Technical interview demo

---

## Lice

