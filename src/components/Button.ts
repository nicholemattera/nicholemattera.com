class ButtonElement extends HTMLElement {
  _initialized = false

  connectedCallback() {
    if (this._initialized) {
      return
    }
    this._initialized = true

    const href = this.getAttribute('href') || ''
    const label = this.getAttribute('label') || ''
    const target = this.getAttribute('target') || ''

    const anchor = document.createElement('a')
    anchor.className =
      'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8 mt-4'
    anchor.href = href
    anchor.innerText = label
    if (target) {
      anchor.target = target
    }

    this.appendChild(anchor)
  }
}

customElements.define('nm-button', ButtonElement)
