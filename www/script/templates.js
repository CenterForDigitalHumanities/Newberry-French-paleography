class NlHeader extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
        <a href="../">🏠</a>
        <a href="manuscripts.html">manuscripts</a>
        <a href="maps.html">maps</a>
        <a href="calligraphy.html">calligraphy books</a>
        `
    }
}

customElements.define('nl-header', NlHeader)

document.querySelector("header").replaceWith(document.createElement("nl-header"))