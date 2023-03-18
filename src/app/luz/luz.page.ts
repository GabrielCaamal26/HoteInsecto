import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-luz',
  templateUrl: './luz.page.html',
  styleUrls: ['./luz.page.scss'],
})
export class LuzPage implements OnInit {

  medicion: number;
  constructor(public database: AngularFireDatabase) { this.leerLuz();}

  ngOnInit() {}
  
  leerLuz(){
    const path='Hotel_Insectos/Luz_Actual/';
    this.database.object(path).valueChanges().subscribe(res=>{
      console.log('Luminosidad: ',res,'%');
      if (typeof res === 'number') {
        this.medicion = res;
      }
    })
  }

}
