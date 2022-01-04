var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 3000;

var nlpRouter = require("./routes/nlp");
var analyzerRoute = require("./routes/analyzer");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/nlp", nlpRouter);
app.use("/api/analyzer", analyzerRoute);

app.get("/", function (req, res) {
    res.render("index.html");
});

app.get("/custom", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index2.html"));
});

app.listen(PORT, () => {
    console.log(`Server Listening on Port: ${PORT}`);
});

module.exports = app;
