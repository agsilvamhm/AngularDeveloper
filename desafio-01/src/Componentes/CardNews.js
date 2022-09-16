class Cardnews extends HTMLElement {
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){ 
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card")

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left")

        const autor = document.createElement("span")
        autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous")

        const linkTitle = document.createElement("a")
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p")
        newsContent.textContent= this.getAttribute("content")

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right")

        const newsImage = document.createElement("img")
        newsImage.src = this.getAttribute("photo") || "./assets/photo-default.jpg"
        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft)    
        componentRoot.appendChild(cardRight)
        return componentRoot
    }


    styles(){ 
        const style = document.createElement("style");
        style.textContent = `
        * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', sans-serif;
    }
    
    .card {
        width: 80%;
        box-shadow: 10px 9px 26px 2px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px 9px 26px 2px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 9px 26px 2px rgba(0,0,0,0.75);
     /*   border: 1px solid gray;*/
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .card_left, .card_right {
      /*  border:1px solid blue;*/
    }
    
    .card_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
    
    .card_left > span {
        font-weight: 400;
    }
    
    .card_left > a {
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
    }
    
    .card_left > p {
        color: gray;
    }
        `;
        return style;
    }

}

customElements.define('card-news', Cardnews)