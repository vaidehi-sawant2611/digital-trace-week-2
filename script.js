
/* FEATURE 1: DIGITAL EVIDENCE LAB */

const scanButton = document.getElementById("scan-button");
const scanProgress = document.getElementById("scan-progress");
const labOutput = document.getElementById("lab-output");

scanButton.addEventListener("click", function () {
    scanProgress.style.width = "100%";

    labOutput.textContent =
        "Simulation complete: Sample evidence examined successfully.";

    scanButton.textContent = "Examination complete ✓";
});


/* FEATURE 2: CONTACT FORM VALIDATION */

const contactForm = document.getElementById("contact-form");
const formOutput = document.getElementById("form-output");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formOutput.textContent =
        "Message validated successfully! Thanks for reaching out.";

    contactForm.reset();
});
