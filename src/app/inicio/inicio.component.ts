import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaTemas: Tema[]
  idTema: number
  tema: Tema = new Tema()

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[]

  idUser = environment.id
  usuario: Usuario = new Usuario()
  
  constructor(private router: Router,
    private temaService: TemaService,
    private authService: AuthService) { }

  ngOnInit(){

      window.scroll(0,0)
      // if(environment.token == ''){
      //   // alert('Sua Sessão expirou, faça login novamente')
      //   this.router.navigate(['/entrar'])
      // }
      this.authService.refreshToken()
      this.buscarTodosTemas()
    }
    buscarTodosTemas(){
      this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }
    buscarTemaPorId(){
      this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
        this.tema = resp
      })
    }
  
    buscarUsuarioPorId(){
      this.authService.getUsuarioById(this.idUser).subscribe((resp: Usuario) => {
        this.usuario = resp
      })
    }
}
