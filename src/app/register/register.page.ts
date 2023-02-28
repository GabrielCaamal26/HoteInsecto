import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private toastController: ToastController,
    ) { }

  ngOnInit() {
  }

  async onRegister(){
    try {
      const user = await this.authSvc.onRegister(this.user);
      if(user){
        console.log('Usuario creado con éxito')
        this.presentToast('Usuario creado con éxito', 'middle')
        this.router.navigateByUrl('/login')
      }
    } catch (error) {
      const err = JSON.stringify(error)
      const errX = JSON.parse(err)
      this.presentToast(errX, 'middle')
    }
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