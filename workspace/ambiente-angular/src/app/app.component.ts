import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  count = 0;
  nome = 'Fernando Luiz';
  text = '';

  pessoas = [
    {
      nome: "Fernando",
      sobrenome: "Luiz"
    },
    {
      nome: "Lauren",
      sobrenome: "Ribeiro"
    },
    {
      nome: "Chris",
      sobrenome: "Luiz"
    },
    {
      nome: "Gabriel",
      sobrenome: "Luiz"
    }
  ]

  constructor(){

  }

  ngOnInit(): void {
    let interval = setInterval(()=> {
      this.count++;
      if(this.count === 10){
        clearInterval(interval)
      }
    }, 1000)
  }

  private clicou(nome: string): void{
    console.log('Clicou em mim', nome)
  }
}
