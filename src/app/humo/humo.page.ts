import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { RealtimeDatabaseService } from '../services/realtime-database.service';

@Component({
  selector: 'app-humo',
  templateUrl: './humo.page.html',
  styleUrls: ['./humo.page.scss'],
})
export class HumoPage implements OnInit {
  public toggleValue:boolean=false;
  medicion: number;
  resmedicion:string;
  buzzer: boolean;
  data1: any;
  constructor(private dataService:RealtimeDatabaseService,public database: AngularFireDatabase) { this.leerHumo();}
  handleToggleClick(){
    this.enviardatos();
  }
  ngOnInit() {
    this.dataService.leerDatos('/Hotel_Insectos/Buzzer').subscribe((data1) =>{
      this.data1=data1;
    });
  }
  enviardatos(){
    if(this.data1==false){
      const ruta='/Hotel_Insectos/Buzzer';
      const datos =true;
      this.dataService.activar_buzzer(ruta,datos);
    }else {
      const ruta='/Hotel_Insectos/Buzzer';
      const datos =false;
      this.dataService.activar_buzzer(ruta,datos);
    }
  }
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
