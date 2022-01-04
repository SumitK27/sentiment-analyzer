const express = require("express");
const router = express.Router();
const ml = require("ml-sentiment")();

router.post("/", (req, res) => {
    const message = req.body.review;

    const score = ml.classify(message);

    res.status(200).json({
        score,
    });
});

module.exports = router;
