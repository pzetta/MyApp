import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  //JSON
  user = {
    usuario: '',
    password: '',
  };
  msj = "";
  carga = false;

  constructor(private router: Router, private animation: AnimationController) { }


//Boton conectar con router a Perfil

  conectar() {

    if (this.user.usuario.length > 0 && this.user.password.length > 0) {
      if (this.user.usuario == "sevian" && this.user.password == "1234") {

//spiner de carga simulando delay con MS

        let navigationExtras: NavigationExtras = {
          state: { user: this.user },
        };
        this.carga =true;
        this.msj="Conexion Exitosa"
        setTimeout(()=>{
        this.router.navigate(['/perfil'], navigationExtras);
        this.msj='';
        this.carga = false;
      },3000);

      }
      else {
        this.msj = "Credenciales erroneas"
      }
    } else {
      this.msj = 'Credenciales no pueden estar vacias';
    }
  }

ngAfterContentInit(){
  this.animacionLogin();
}

animacionLogin(){
const imagen = document.querySelector(
  '#container ion-card ion-card-header ion-img'
) as HTMLElement;

const animacion = this.animation
.create()
.addElement(imagen)
.duration(3000)
.iterations(Infinity)
.keyframes([
  {
    offset: 0,
    opacity: '1',
    border: '10px solid white',
    transform: 'translateY(100px)',
  },
  {
    offset: 0.25,
    opacity: '0.5',
    border: '10px solid red',
    transform: 'translateX(100px)',
  },
  {
    offset: 0.5,
    opacity: '1',
    border: '10px solid blue',
    transform: 'translateY(-100px)',
  },
  {
    offset: 0.75,
    opacity: '1',
    border: '10px solid green',
    transform: 'translateX(-100px)',
  },
  {
    offset: 1,
    opacity: '1',
    border: '10px solid cyan',
    transform: 'translateY(100px)',
  },
  
]);
animacion.play();
  }

}
