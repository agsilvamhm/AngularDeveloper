import { Component, 
	       OnInit,
				 DoCheck,
				 AfterContentChecked,
				 AfterContentInit,
				 AfterViewChecked,
				 AfterViewInit, 
				 OnDestroy} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements 
				 OnInit,
				 DoCheck,
				 AfterContentChecked,
				 AfterContentInit,
				 AfterViewChecked,
				 AfterViewInit,
				 OnDestroy {

					quantidade: number = 0

					incrementar(){
						this.quantidade += 1
					}

					decrementar(){
						this.quantidade -= 1
					}

  constructor() { }

	ngOnDestroy(): void {
		console.log("Goodbye my friends")
	}

// checked -> content -> view


	// quando o primeiro conteúdo é iniciado
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit")
 }

// depois da inicialização da view
	ngAfterViewInit(): void {
	  console.log("ngAfterViewInit")
	}

		// após alguma alteração verifica o conteúdo
		ngAfterContentChecked(): void {
			console.log("ngAfterContentchecked")
	 }

// após alguma alteração verifica a view
	ngAfterViewChecked(): void {
		console.log("ngAfterViewchecked")
	} 

	ngDoCheck(): void {
	    console.log("ngDocheck")
	}

  ngOnInit(): void {
		  console.log("ngonInit")
  }
}