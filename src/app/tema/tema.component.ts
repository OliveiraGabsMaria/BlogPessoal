import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
    ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
    //   // alert('Sua Sessão expirou, faça login novamente')
      this.router.navigate(['/entrar'])
    }
    this.buscarTodosTemas()
  }

  cadastrarTema() {
    console.log(this.tema)
    this.temaService.postTema(this.tema).subscribe((resp: Tema) =>{
      this.tema = resp
      alert('Tema cadastrado com louvor!')
      this.buscarTodosTemas()
      this.tema = new Tema()
    })
  }
  buscarTodosTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) =>{
      this.listaTemas = resp
    })
  }
}
