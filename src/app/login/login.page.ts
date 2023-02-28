import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User
  constructor(
    private router: Router, 
    private authSvc: AuthService,
    private toastController: ToastController,
    ) { }

  ngOnInit() {
  }

  async onLogin(){
    try {
      const user = await this.authSvc.onLogin(this.user);
      if(user) {
        console.log('usuario logueado correctamente!');
        this.presentToast('Usuario Logueado con éxito', 'middle')
        this.router.navigateByUrl('/home');
      }
    } catch (error) {
      const err = JSON.stringify(error)
      const errX = JSON.parse(err)
      this.presentToast(errX['code'], 'middle')
    }
    

  }

  async onNewUser(){
      this.router.navigateByUrl('/register');
  }

  async presentToast(error: string,position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: error,
      duration: 2500,
      position: position
    });

    await toast.present();
  }

}
