import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Postagem{
    public id: number;
    public titulo: string;
    public nota: number;
    public texto: string;
    public foto: string;
    public quote: string;
    public precopago: number;
    public data: Date;
    public tema: Tema;
    public usuario: Usuario;

}