# Formação Angular Developer
## Curso: Formação Angular Developer, Plataforma: Digital Innovation One
![imagem](/Imagens/Logo-Angular-Developer.webp)

## Módulo 01 - Introdução e pré requisitos

### Base para a contrução de um compoente

class 'Classe do compoente' extends HTMLElement { /b
    constructor() {
      super();
      const shadow = this.attachShadow({mode: "open"})
    }
}

customElements.define("nova-tag", Classe do componente) 
