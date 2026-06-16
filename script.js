const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const statusText = document.getElementById("status");
const dragonCheck = document.getElementById("dragonCheck");
const progressBar = document.getElementById("progressBar");

const buttonTexts = [
    "Upload File",
    "Upload Maybe",
    "Think Again",
    "Don't Upload",
    "Upload If You Dare",
    "Consult Your Lawyer",
    "Potentially Upload",
    "This Seems Risky",
    "Are You Sure?",
    "Upload Against Advice"
];

const comments = [
    "Interesting choice.",
    "That file looks suspicious.",
    "I've seen better files.",
    "Your file and I need to talk.",
    "This upload concerns me.",
    "I wouldn't have picked that.",
    "Bold decision.",
    "Questionable file detected."
];

const successMessages = [
    "Upload completed reluctantly.",
    "Fine. Your file is uploaded.",
    "I hope you're happy now.",
    "Upload successful. Barely.",
    "Against my better judgment, it worked."
];

// Change button text every 2 seconds
setInterval(() => {
    const randomText =
        buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

    uploadBtn.innerText = randomText;
}, 2000);

// Button runs away 70% of the time
uploadBtn.addEventListener("mouseover", () => {

    if (Math.random() < 0.7) {

        const x =
            Math.random() * (window.innerWidth - 250);

        const y =
            Math.random() * (window.innerHeight - 150);

        uploadBtn.style.left = x + "px";
        uploadBtn.style.top = y + "px";
    }

});

// Click upload button
uploadBtn.addEventListener("click", () => {

    if (!dragonCheck.checked) {

        statusText.innerText =
            "🚫 Upload denied. Possible dragon detected.";

        return;
    }

    fileInput.click();
});

// After selecting file
fileInput.addEventListener("change", () => {

    const randomComment =
        comments[Math.floor(Math.random() * comments.length)];

    statusText.innerText = randomComment;

    startFakeUpload();
});

// Fake upload progress
function startFakeUpload() {

    progressBar.style.width = "0%";

    const fakeProgress = [
        5,
        40,
        75,
        20,
        90,
        35,
        98,
        65,
        100
    ];

    let i = 0;

    const interval = setInterval(() => {

        progressBar.style.width =
            fakeProgress[i] + "%";

        statusText.innerText =
            "Uploading... " +
            fakeProgress[i] +
            "%";

        i++;

        if (i >= fakeProgress.length) {

            clearInterval(interval);

            const finalMessage =
                successMessages[
                    Math.floor(
                        Math.random() *
                        successMessages.length
                    )
                ];

            statusText.innerText = finalMessage;
        }

    }, 700);

}