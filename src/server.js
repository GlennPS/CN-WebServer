const express = require("express")
const app = express();
const port = 5000;

app.use("/static", express.static("public")) //allowing the app to use the static files

app.listen(port, () => {
    console.log(`Listening on port ${port}`) //using backticks as Template literals
});


