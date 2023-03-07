## ExpressJS Routes Example

This is a simple example of how to create routes in ExpressJS. In this example, we will create three routes, each serving a different message.

#### Prerequisites

Before you begin, you will need to have the following installed on your machine:

- Node.js
- npm or yarn

#### Getting Started

1. Clone this repository to your local machine.

```bash
git clone https://github.com/your-username/expressjs-routes-example.git
```

2. Install the dependencies.

```bash
cd expressjs-routes-example
npm install
```

3. Start the server.

```bash
npm start
```

4. Open your browser and navigate to the following URLs to see the different messages served by each route:

   - http://localhost:3000/ - Hello, world!
   - http://localhost:3000/about/user/Bob - This is the about page for the user Bob.
   - http://localhost:3000/contact/user/Bob - This is the contact page for the user Bob.

#### Adding More Routes

To add more routes, you can create new files in the routes directory and define your routes using the express.Router() method. Then, require the new route file in your app.js file and use it with the app.use() method.

#### License

This project is licensed under the MIT License. See the LICENSE file for details.

#### Acknowledgements

This example is based on the ExpressJS Getting Started Guide.
