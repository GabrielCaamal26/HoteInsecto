import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-humo',
  templateUrl: './humo.page.html',
  styleUrls: ['./humo.page.scss'],
})
export class HumoPage implements OnInit {
  medicion: number;
  resmedicion:string;
  buzzer: boolean;
  constructor(public database: AngularFireDatabase) { this.leerHumo();}

  ngOnInit() {}

  leerHumo(){
    const path='Hotel_Insectos/Deteccion_humo/';
    
    this.database.object(path).valueChanges().subscribe(res=>{
      console.log('Humo: ',res);
      if (typeof res === 'number') {
        this.medicion = res;
      }
      if (this.medicion<=500){
        this.resmedicion="No hay humo";
      }else if(this.medicion>500){
        this.resmedicion="Humo detectado";
      }
    })
  }
  leerBuzzer(){
    const path='Hotel_Insectos/Buzzer/';
    this.database.object(path).valueChanges().subscribe(res=>{
      if (typeof res === 'boolean') {
        this.buzzer = res;
      }
    })
  }

}
