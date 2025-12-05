class PharmaNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <nav class="navbar bg-light">
  <div class="container">
    <img src="#" alt="Logo" width="35" height="35">
    
    <h5 class="mx-auto mb-0">Pharma Lirë</h5>
    
    <div>
      <a href="#" class="text-dark mx-2 text-decoration-none">Home</a>
      <a href="#" class="text-dark mx-2 text-decoration-none">Page</a>
      <a href="#" class="text-dark mx-2 text-decoration-none">Page</a>
    </div>
  </div>
</nav>
    `;
  }
}

customElements.define("pharma-navbar", PharmaNavbar);