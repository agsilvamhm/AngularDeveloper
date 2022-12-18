import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  produtos: string[] = []
  constructor() {
    this.produtos = [
      "Mouse",
      "Teclado",
      "Monitor",
      "Cabo",
      "Fonte"
    ]
  }

  adicionar(){
    this.produtos.push("Adalberto")
  }

  remover(index: number){
     this.produtos.splice(index,1)
  }

  ngOnInit(): void {
  }
}
