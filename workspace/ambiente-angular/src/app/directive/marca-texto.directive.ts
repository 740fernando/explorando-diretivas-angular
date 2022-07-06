import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit{
  @Input() corDeFundo: string = 'yellow';
  @Input() corDoTexto: string = 'white';

  
  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    
  }
  private mudarFundo(cor: string = 'yellow'){
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.style.color = this.corDoTexto;
    this.elemento.nativeElement.style.fontWeigth = 'bold';
  }
}


/**
 * Envia os dados do componente pai p/ o filho
 * o pai sera quem chamará a diretiva
 */
