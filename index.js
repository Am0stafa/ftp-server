const express = require('express');
const cors = require('cors');
const serveIndex = require('serve-index');//! this will act as a middleware to serve the directory
const app = express();
app.use(express.json());
app.use(cors());

app.use('/ftp', express.static('public/ftp'), serveIndex('public/ftp',{icons:true}));




app.listen(8080, () => {
    console.log(
      `Server is ready at http://localhost:${8080}`
    );
});