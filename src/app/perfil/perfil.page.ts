<<<<<<< Updated upstream
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { AuthService } from '../Servicios/auth.service';
import { ToastController } from '@ionic/angular';
=======
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Servicios/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
>>>>>>> Stashed changes

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
<<<<<<< Updated upstream
export class PerfilPage implements OnInit, AfterViewInit {
  constructor(
    private router: Router,
    private animation: AnimationController,
    private auth: AuthService,
    private toast: ToastController
  ) {}
  user = {
    usuario: '',
    password: '',
  };
  nombreUsuario = '';

  ngOnInit() {
    // Inicializa el usuario desde el estado de la navegación si existe
    this.user = history.state.user || { usuario: '', password: '' };
    this.nombreUsuario = this.user.usuario;
  }
=======
export class PerfilPage implements OnInit {
  constructor(private auth: AuthService, private router: Router,
              private toast:ToastController
  ) {}
  user={
    usuario:"",
    password:""
  }
nombreUsuario= '';
  ngOnInit() {}
    ngAfterContentInit(){
    this.user = history.state.user;
    this.nombreUsuario = this.user.usuario; 
    }
    logout() {
      this.auth.logout();
      this.router.navigate(['/home']);
      this.generarToast("Usuario Desconectado");
    }

    generarToast(message: string){
      const toast = this.toast.create({
        message: message,
        duration: 3000,
        position: 'bottom',
      });

      toast.then((res) => {
        res.present();
      });
    }
>>>>>>> Stashed changes

  ngAfterViewInit() {
    this.animacionAutito(); // Llama la animación después de que los elementos estén disponibles
  }

  recuperarContrasenia() {
    this.router.navigate(['/recuperar-contrasenia']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/home']);
    this.generarToast('Usuario Desconectado');
  }

  generarToast(message: string) {
    const toast = this.toast.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });

    toast.then((res) => {
      res.present();
    });
  }

  animacionAutito() {
    const autito = document.querySelector('#autito') as HTMLElement;

    if (autito) {
      const animacionAutito = this.animation
        .create()
        .addElement(autito)
        .duration(5000)
        .iterations(Infinity)
        .keyframes([
          {
            offset: 0,
            transform: 'translateX(-300px)',
          },
          {
            offset: 0.5,
            transform: 'translateX(300px)',
          },
          {
            offset: 0.51,
            transform: 'translateX(300px) scaleX(-1)',
          },
          {
            offset: 1,
            transform: 'translateX(-300px) scaleX(-1)',
          },
        ]);
      animacionAutito.play();
    } else {
      console.error('Elemento #autito no encontrado en el DOM.');
    }
  }
}

