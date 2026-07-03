const express = require("express");
require('dotenv').config();

const app = express();

// Route
app.get("/", (req, res) => {
    res.send("Software Packaging Project");
});

// Port from env or fallback
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
