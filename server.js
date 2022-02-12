const express = require("express");
const app = express();

// Seed data...
require("./seed/meraki_store")()

const router = require("./routes/meraki")

// Middlewares ....
app.use(express.json())
app.use("/courses",router)


const PORT = process.env.PORT | 2020
app.listen(PORT,()=>{
    console.log(`Your server is listening on http://localhost:${PORT}`);
}) 

