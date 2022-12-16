# Formação Angular Developer
## Curso: Formação Angular Developer, Plataforma: Digital Innovation One
![imagem](/Imagens/Logo-Angular-Developer.webp)

## Módulo 01 - Introdução e pré requisitos

### Base para a contrução de um compoente

class 'Classe do compoente' extends HTMLElement { \
    constructor() {  \
      super();     \
      const shadow = this.attachShadow({mode: "open"})  \
    }  
}   

customElements.define("nova-tag", Classe do componente)  

## Módulo 02 - TypeScript para Angular
## Módulo 03 - Composição dos componentes
Obs: https://stackblitz.com é um site para testar tanto a programação com Angular quanto com outros Frameworks e bibliotecas.
tsconfig.json = Toda a configuração para o typescript
package.json = É o coração do node
angular.json = Arquivo de confiurações gerais do Angular
----+---------
Arquivos dentro da pasta src:
index.html = É o arquivo raiz, dentro dele só terá o arquivo raiz.
main.ts = É o arquivo que ajuda a inicializar o seu projeto.
polifils.ts = É o arquivo responsável em deixar compátivel com navegadores mais antigos.

## Módulo 04 - Single Page Application com Angular
*ngIf = Recebe os valores true ou false, serve para esconder um componente, true é o padrão, exibe o componente e com o valor false o componente é ocultado. Exemplo: '<p *ngIf="false">Texto</p>' neste exemplo o parágrafo não é exibido na aplicação.
