<<<<<<< Updated upstream
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Stashed changes

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
  standalone: false,
})
export class ErrorPage implements OnInit {

<<<<<<< Updated upstream
  constructor(private router:Router, private toast: ToastController) { }

  ngOnInit() {}

  inicio() {
    this.router.navigate(['/home']);
    this.generarToast('Inicio de Sesión');
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
=======
  constructor() { }

  ngOnInit() {
>>>>>>> Stashed changes
  }

}
