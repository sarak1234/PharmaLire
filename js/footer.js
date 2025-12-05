class PharmaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-light py-4 mt-5 border-top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 mb-3 mb-md-0">
              <h5 class="fw-bold">Pharma Lirë</h5>
              <img src="#" alt="logo" width="40" height="40">
              <p class="text-muted mb-3">Gjeni ilaçet tuaj në çdo farmaci në Kosovë</p>
            </div>

            <div class="col-md-6 text-md-end">
              <ul class="list-unstyled d-flex flex-wrap justify-content-md-end gap-3 mb-3">
                <li><a href="#" class="text-decoration-none text-dark">Homa</a></li>
                <li><a href="#" class="text-decoration-none text-dark">Page</a></li>
                <li><a href="#" class="text-decoration-none text-dark">Page</a></li>
                <li><a href="#" class="text-decoration-none text-dark">Page</a></li>
                <li><a href="#" class="text-decoration-none text-dark">Page</a></li>
              </ul>
            </div>
          </div>

          <div class="text-center pt-3 border-top mt-3">
            <p class="text-muted">© 2025 Pharma Lirë.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("pharma-footer", PharmaFooter);