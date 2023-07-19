import { Component } from '@angular/core';
import { RutasService, Rutas } from 'src/app/services/rutas.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
  rutas: Rutas[]=[];

  ngOnInit(): void{
    this.rutas= this._rutasService.getRutas();
    console.log(this.rutas);
  }

  constructor(private _rutasService:RutasService,private router: Router){
    
  }
  
  verRutas(idx: number){
    console.log(idx);
    this.router.navigate(['/rutas', idx]);
  }
}
