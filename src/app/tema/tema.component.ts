import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)

    // if(environment.token == ''){
    //   // alert('Sua Sessão expirou, faça login novamente')
    //   this.router.navigate(['/login'])
    // }
  }
}
