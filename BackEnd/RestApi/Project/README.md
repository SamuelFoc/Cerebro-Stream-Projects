## REST API Project

This repository contains the backend code for the Cerebro Stream Projects RestApi.

#### Getting Started

To get started with this project, clone this repository to your local machine using the following command:

```bash
git clone https://github.com/SamuelFoc/Cerebro-Stream-Projects.git
```

#### Prerequisites

Before you can run this project, you will need to have Node.js and NPM installed on your machine. You can download the latest version of Node.js from the official website at https://nodejs.org.

#### Installing

To install the dependencies for this project, navigate to the project directory and run the following command:

```bash
npm install
```

#### Running the Project

To start the server, run the following command:

```bash
npm start
```

This will start the server on port 3000. You can then access the API by visiting http://localhost:3000/api/todos/.

#### API Endpoints

This RestApi supports the following endpoints:

- GET /api/todos
  This endpoint returns a list of all todos in the system.

- POST /api/todos
  This endpoint creates a new todo item.

- PUT /api/todos/:id
  This endpoint updates the todo item with the specified ID.

- DELETE /api/todos/:id
  This endpoint deletes the todo item with the specified ID.

#### Built With

- Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express.js - A fast, minimalist web framework for Node.js.
- SQLite - A light size relational database.

#### Authors

Ing. Samuel Šipikal

#### License

This project is licensed under the MIT License.
