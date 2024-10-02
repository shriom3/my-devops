const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, DevOps Toolchain!');
});

// Add the console.log here to indicate the server is starting
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("New update!"); // Your new line
});
