import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello eksamen! Let's have some fun with docker.");
});

app.listen(port, () => {
    console.log("Listening on port " + port);
    
});
