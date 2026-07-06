const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>🚀 Dockerized Node.js Express App</h1>");
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        application: "Node.js Express",
        version: "1.0.0"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});