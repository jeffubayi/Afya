const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
// Accessing the path module
const path = require("path");
const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDB();

app.use(cors());

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: process.env.NODE_ENV === 'development',
//   })
// );

app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, console.log(`Server running on port ${port}`));
