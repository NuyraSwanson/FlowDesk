// =========================================
// FLOWDESK REGISTRATION
// =========================================
function validateStep1() {

    const businessName = document.getElementById("businessName").value.trim();
    const industry = document.getElementById("industry").value;
    const ownerName = document.getElementById("ownerName").value.trim();
    const email = document.getElementById("businessEmail").value.trim();
    const phone = document.getElementById("phoneNumber").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    if (!businessName) {
        alert("Please enter your business name.");
        return false;
    }

    if (!industry) {
        alert("Please select an industry.");
        return false;
    }

    if (!ownerName) {
        alert("Please enter the owner's name.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!phone) {
        alert("Please enter your phone number.");
        return false;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (!terms) {
        alert("Please accept the Terms & Conditions.");
        return false;
    }

    return true;
}

function validateStep2() {

    const streetAddress = document.getElementById("streetAddress").value.trim();
    const city = document.getElementById("city").value.trim();
    const province = document.getElementById("province").value;
    const country = document.getElementById("country").value;

    if (!streetAddress) {

        alert("Please enter your street address.");

        return false;

    }

    if (!city) {

        alert("Please enter your city.");

        return false;

    }

    if (!province) {

        alert("Please select your province.");

        return false;

    }

    if (!country) {

        alert("Please select your country.");

        return false;

    }

    return true;

}

function validateStep3() {

    const serviceName = document.getElementById("serviceName").value.trim();
    const serviceCategory = document.getElementById("serviceCategory").value.trim();
    const serviceDuration = document.getElementById("serviceDuration").value;
    const servicePrice = document.getElementById("servicePrice").value;

    if (!serviceName) {

        alert("Please enter a service name.");

        return false;

    }

    if (!serviceCategory) {

        alert("Please enter a service category.");

        return false;

    }

    if (!serviceDuration) {

        alert("Please select a service duration.");

        return false;

    }

    if (!servicePrice) {

        alert("Please enter a service price.");

        return false;

    }

    if (Number(servicePrice) <= 0) {

        alert("Service price must be greater than 0.");

        return false;

    }

    return true;

}


function showStep(stepNumber) {

    stepNumber = Number(stepNumber);

    // Hide all form steps
    document.querySelectorAll(".form-step").forEach(step => {
        step.classList.remove("active");
    });

    // Show selected form
    document.getElementById(`step-${stepNumber}`).classList.add("active");

    // Update progress steps
    document.querySelectorAll(".progress-step").forEach((step, index) => {

        if (index + 1 <= stepNumber) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }

    });

    // Update "Step X of 3"
    document.querySelector(".step-counter").textContent =
        `Step ${stepNumber} of 3`;

    // Update progress bar
    const progressFill = document.querySelector(".progress-fill");

    progressFill.style.width = ((stepNumber - 1) / 2) * 100 + "%";

}

// =========================================
// NEXT BUTTONS
// =========================================

document.querySelectorAll(".next-btn").forEach(button => {

    button.addEventListener("click", () => {

        const nextStep = Number(button.dataset.next);

        // Leaving Step 1
        if (nextStep === 2 && !validateStep1()) {

            return;

        }

        // Leaving Step 2
        if (nextStep === 3 && !validateStep2()) {

            return;

        }

        showStep(nextStep);

    });

});

// =========================================
// PREVIOUS BUTTONS
// =========================================

document.querySelectorAll(".prev-btn").forEach(button => {

    button.addEventListener("click", () => {

        const previousStep = button.dataset.prev;

        showStep(previousStep);

    });

});

document
    .getElementById("businessRegisterForm")
    .addEventListener("submit", function (event) {

        if (!validateStep3()) {

            event.preventDefault();

        }

    });