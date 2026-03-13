class ExperienceElement extends HTMLElement {
  _initialized = false

  connectedCallback() {
    if (this._initialized) {
      return
    }
    this._initialized = true

    const title = this.getAttribute('title') || ''
    const company = this.getAttribute('company') || ''
    const period = this.getAttribute('period') || ''

    const wrapper = document.createElement('div')
    wrapper.className = 'rounded-xl border bg-card text-card-foreground shadow mt-4'

    const headerWrapper = document.createElement('div')
    headerWrapper.className = 'flex flex-col space-y-1.5 p-6'

    const header = document.createElement('h3')
    header.className = 'font-semibold leading-none tracking-tight'
    header.innerText = title
    headerWrapper.appendChild(header)

    const subheader = document.createElement('p')
    subheader.className = 'text-sm text-muted-foreground'
    subheader.innerText = `${company} | ${period}`
    headerWrapper.appendChild(subheader)

    wrapper.appendChild(headerWrapper)

    while (this.firstElementChild) {
      wrapper.appendChild(this.firstElementChild)
    }

    this.appendChild(wrapper)
  }
}

customElements.define('nm-experience', ExperienceElement)
