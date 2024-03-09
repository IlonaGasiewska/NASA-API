process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const express = require('express');
const app = express();
const port = require("./config");
const routes = require("./src/delivery/routes/index")

app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;


// http://localhost:4000/meteors/2015-02-21/2015-02-23/262o2PcvlfW9FNXzZSqNaW9a0uQ7yUGExY7Sc0