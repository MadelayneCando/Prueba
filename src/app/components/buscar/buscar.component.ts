import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutasService } from 'src/app/services/rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  rutas:any[] = []
  dato:string = '';
  constructor(private activatedRoute:ActivatedRoute, private _rutasService:RutasService, private router: Router) {}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.dato = params ['dato'];
      this.rutas = this._rutasService.buscarRutas(params ['dato']);
      console.log(this.rutas);
    });
  }

  verRutas(idx: number){
    console.log(idx);
    this.router.navigate(['/ruta', idx]);
  }
}
