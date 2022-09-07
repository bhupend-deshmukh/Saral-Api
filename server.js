const express = require("express");
const app = express();

// Seed data...


const router = require("./routes/meraki")

// Middlewares ....
app.use(express.json())
app.use(router)


const PORT =  2020
app.listen(PORT,()=>{
    console.log(`Your server is listening on http://localhost:${PORT}`);
}) 

