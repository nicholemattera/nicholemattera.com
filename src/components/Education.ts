class EducationElement extends HTMLElement {
  _initialized = false

  connectedCallback() {
    if (this._initialized) {
      return
    }
    this._initialized = true

    const name = this.getAttribute('name') || ''
    const organization = this.getAttribute('organization') || ''
    const year = this.getAttribute('year') || ''

    const wrapper = document.createElement('div')
    wrapper.className = 'rounded-xl border bg-card text-card-foreground shadow mt-4 flex flex-col space-y-1.5 p-6'

    const header = document.createElement('h3')
    header.className = 'font-semibold leading-none tracking-tight'
    header.innerText = name
    wrapper.appendChild(header)

    const subheader = document.createElement('p')
    subheader.className = 'text-sm text-muted-foreground'
    subheader.innerText = `${organization} | ${year}`
    wrapper.appendChild(subheader)

    while (this.firstElementChild) {
      wrapper.appendChild(this.firstElementChild)
    }

    this.appendChild(wrapper)
  }
}

customElements.define('nm-education', EducationElement)
