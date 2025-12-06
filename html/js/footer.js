// footer.js

const footerHTML = `
<footer class="bg-dark text-white pt-5 pb-4 mt-5">
    <div class="container text-center text-md-left">
        <div class="row text-center text-md-left">
            <!-- About -->
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 class="text-uppercase mb-4 font-weight-bold text-success">PharmaLirë</h5>
                <p>Providing affordable medicines, fast delivery, and trusted advice from verified pharmacies.</p>
            </div>

            <!-- Quick Links -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold text-success">Quick Links</h6>
                <p><a href="index.html" class="text-white text-decoration-none">Home</a></p>
                <p><a href="#" class="text-white text-decoration-none">Compare Prices</a></p>
                <p><a href="#" class="text-white text-decoration-none">Pharmacies</a></p>
                <p><a href="#" class="text-white text-decoration-none">About</a></p>
            </div>

            <!-- Support -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold text-success">Support</h6>
                <p><a href="login.html" class="text-white text-decoration-none">Login</a></p>
                <p><a href="signup.html" class="text-white text-decoration-none">Sign Up</a></p>
                <p><a href="#" class="text-white text-decoration-none">Contact</a></p>
            </div>

            <!-- Contact -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold text-success">Contact</h6>
                <p><i class="bi bi-house-fill me-2"></i> Tirana, Albania</p>
                <p><i class="bi bi-envelope-fill me-2"></i> support@pharmalire.com</p>
                <p><i class="bi bi-telephone-fill me-2"></i> +355 123 456 789</p>
            </div>
        </div>

        <hr class="mb-4">

        <div class="row align-items-center">
            <div class="col-md-7 col-lg-8">
                <p>© 2025 PharmaLirë. All Rights Reserved.</p>
            </div>
            <div class="col-md-5 col-lg-4">
                <div class="text-center text-md-right">
                    <a href="#" class="text-white me-4"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="text-white me-4"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="text-white me-4"><i class="bi bi-instagram"></i></a>
                </div>
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
