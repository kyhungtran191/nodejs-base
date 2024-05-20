const express = require('express');
const app = express();

// Basic route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Ok",
        data: []
    })
})

const port = 3000;
// Start server
app.listen(port, () => {
    console.log(`App running on port  ${port}`)
})