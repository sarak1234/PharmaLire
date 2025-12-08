// footer.js

const footerHTML = `
<footer class="bg-dark text-white pt-5 pb-4 mt-5">
    <div class="container text-center text-md-left">
        <div class="row text-center text-md-left">
            <!-- About -->
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 class="text-uppercase mb-4 font-weight-bold text-success">PharMaLirë</h5>
                <p>Platformë që ju ndihmon të gjeni produkte mjekësore në kohë rekord me cmime më të përballueshme në treg. </p>
            </div>

            <!-- Quick Links -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold text-success">Faqe</h6>
                <p><a href="index.html" class="text-white text-decoration-none">Home</a></p>
                <p><a href="compareprices.html" class="text-white text-decoration-none">Compare Prices</a></p>
                <p><a href="pharmacies.html" class="text-white text-decoration-none">Pharmacies</a></p>
                <p><a href="about.html" class="text-white text-decoration-none">About</a></p>
            </div>

            <!-- Support -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold text-success">Regjistrimi</h6>
                <p><a href="login.html" class="text-white text-decoration-none">Login</a></p>
                <p><a href="signup.html" class="text-white text-decoration-none">Sign Up</a></p>

            </div>

            <!-- Contact -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold text-success">Kontakti</h6>
                <p><a href="contact.html" class="text-white text-decoration-none">Contact</a></p>
                <p><i class="bi bi-house-fill me-2"></i> Prishtinë, Kosovë</p>
                <p><i class="bi bi-envelope-fill me-2"></i> support@pharmalire.com</p>

                <p><i class="bi bi-telephone-fill me-2"></i> +383 44 123 456</p>
            </div>
        </div>

        <hr class="mb-4">

        <div class="row align-items-center">
            <div class="col-md-7 col-lg-8">
                <p>© 2025 PharMaLirë. All Rights Reserved.</p>
            </div>

        </div>
    </div>
</footer>
`;

// Insert footer at the end of body
document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.createElement("div");
    footerContainer.innerHTML = footerHTML;
    document.body.appendChild(footerContainer);
});
