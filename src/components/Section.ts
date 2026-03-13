class SectionElement extends HTMLElement {
  _initialized = false

  connectedCallback() {
    if (this._initialized) {
      return
    }
    this._initialized = true

    const title = this.getAttribute('title') || ''
    const isGrid = this.hasAttribute('grid')

    const wrapper = document.createElement('section')
    wrapper.className = 'mb-3 md:mb-5 lg:mb-7'

    const header = document.createElement('h2')
    header.className = 'text-3xl font-bold tracking-tighter text-foreground'
    header.innerText = title
    wrapper.appendChild(header)

    if (isGrid) {
      const contentWrapper = document.createElement('div')
      contentWrapper.className = 'mt-4 grid items-start gap-4 lg:grid-cols-2'
      wrapper.appendChild(contentWrapper)

      while (this.firstElementChild) {
        contentWrapper.appendChild(this.firstElementChild)
      }
    } else {
      while (this.firstElementChild) {
        wrapper.appendChild(this.firstElementChild)
      }
    }

    this.appendChild(wrapper)
  }
}

customElements.define('nm-section', SectionElement)
