const submitReview = (e) => {
    e.preventDefault();
    const review = document.getElementById("review").value;
    const options = {
        method: "POST",
        body: JSON.stringify({ review }),
        headers: new Headers({ "Content-Type": "application/json" }),
    };

    const emojiSection = document.getElementById("emojiSection");
    const title = document.getElementById("title");
    const outline = document.querySelector(":focus");

    // Pre-trained Sentiment Analysis
    fetch("/api/analyzer", options)
        .then((res) => res.json())
        .then(({ score }) => {
            if (score >= 5) {
                emojiSection.innerHTML = "😃";
                title.style.color = "orange";
                outline.style.borderColor = "orange";
            } else if (score === 0) {
                emojiSection.innerHTML = "😐";
                title.style.color = "#00367c";
                outline.style.borderColor = "#00367c";
            } else if (score > 0) {
                emojiSection.innerHTML = "🙂";
                title.style.color = "green";
                outline.style.borderColor = "green";
            } else {
                emojiSection.innerHTML = "😕";
                title.style.color = "red";
                outline.style.borderColor = "red";
            }
        })
        .catch((err) => {
            emojiSection.innerHTML =
                "There was an error processing your request!";

            console.log(err);
        });
};

document.getElementById("review").addEventListener("keyup", submitReview);
document.getElementById("reviewForm").addEventListener("submit", submitReview);
