# E-commerce-MERN

Some notes 

"scripts": {
    "start": "node backend/server.js",  // to debloy in a web site like heroku
    "server": "nodemon backend/server.js",  // to run only the server
    "client": "npm start --prefix frontend",  // to run only for clients
    "dev": "concurrently \"npm run server\" \"npm run client\""   // run the frontend & backend in the same time
  },