class PharmaNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <nav class="navbar navbar-expand-lg navbar-custom px-4 py-3">
        <a class="brand-green" href="#">
            <img src="img/logo.png" alt="logo" style="height:80px;">
            <span>PharMaLirë</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
            aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span style="font-size:20px;color:#0b7d50">☰</span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul class="navbar-nav align-items-center">
                <li class="nav-item"><a class="nav-link custom" href="index.html" data-translate="home">Home</a></li>
                <li class="nav-item"><a class="nav-link custom" href="#" data-translate="compare">Compare Prices</a>
                </li>
                <li class="nav-item"><a class="nav-link custom" href="pharmacies.html" data-translate="pharmacies">Pharmacies</a></li>
                <li class="nav-item"><a class="nav-link custom" href="about.html" data-translate="about">About</a></li>
                <li class="nav-item"><a class="nav-link custom" href="contact.html" data-translate="contact">Contact</a></li>
                <li class="nav-item ms-3"> <button class="btn btn-sm btn-login me-2"
                        onclick="location.href='login.html'">Login</button> </li>
                <li class="nav-item ms-3"> <button class="btn btn-sm btn-signup"
                        onclick="location.href='signup.html'">Sign Up</button> </li>
            </ul>
        </div>
    </nav>
    `;
  }
}

customElements.define("pharma-navbar", PharmaNavbar);