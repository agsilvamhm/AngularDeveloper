class Cardnews extends HTMLElement {
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})
    }
}

customElements.define('card-news', Cardnews)