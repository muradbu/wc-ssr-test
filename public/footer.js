const template = document.createElement('template');

template.innerHTML = `
  <style>
    .footer {
      color: white;
      background-color: #000;
      padding: 20px;
    }
  </style>

  <footer class="footer">
    <p>I am server rendered</p>
    <h4>My Blog &copy; ${new Date().getFullYear()}</h4>
  </footer>
`;

class Footer extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

export default Footer;

customElements.define('wcc-footer', Footer);