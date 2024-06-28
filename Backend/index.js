const express = require("express");
const app = express();
const port = 5001;
const db = require("./db");
const contactSchemas = require("./schema");
const cors = require('cors');

app.use(cors())
app.use(express.json())

app.post('/Contact', async (req, res) => {
    const { name, email, massage } = req.body;
    const data = await new contactSchemas({ name, email, massage });
    const result = await data.save();
    if (result) {
        res.json("done");
    }
})

app.listen(port, () => {
    console.log(`port listen ${port}`)
});