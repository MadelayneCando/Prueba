import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  private rutas:Rutas[]=[
    {
      ciuorigen: "Huaquillas",
      ciudestino: "Machala",
      precio: "2,50",
      descrip: "Directo",
      tipo: "Interno"
    },
    {
      ciuorigen: "Machala",
      ciudestino: "Huaquillas",
      precio: "2,65",
      descrip: "Directo",
      tipo: "Interno"
    },
    {
      ciuorigen: "Huqaquillas",
      ciudestino: "Santa Rosa",
      precio: "2,00",
      descrip: "Vía indirecto",
      tipo: "Interno"
    },
    {
      ciuorigen: "Machala",
      ciudestino: "El Guabo",
      precio: "0,85",
      descrip: "Directo",
      tipo: "Interno"
    },
    {
      ciuorigen: "Huaquillas",
      ciudestino: "Guayaquil",
      precio: "9,00",
      descrip: "De mañana",
      tipo: "Externo"
    },
    {
      ciuorigen: "Machala",
      ciudestino: "Guayaquil",
      precio: "8,00",
      descrip: "De noche",
      tipo: "Externo",
    },
    {
      ciuorigen: "Guayaquil",
      ciudestino: "Santa Rosa",
      precio: "9,00",
      descrip: "Directo",
      tipo: "Externo",
    },
    {
      ciuorigen: "Manta",
      ciudestino: "Huaquillas",
      precio: "15,00",
      descrip: "Aire acondicionado",
      tipo: "Externo",
    },
    {
      ciuorigen: "Quito",
      ciudestino: "Machala",
      precio: "18,00",
      descrip: "Bus cama",
      tipo: "Externo",
    },
    {
      ciuorigen: "Guayaquil",
      ciudestino: "Quito",
      precio: "10,00",
      descrip: "Bus cama",
      tipo: "Externo",
    }
  ];

  getRutas(){
    return this.rutas;
  }
  
  getRuta(idx:number):Rutas{
    return this.rutas[idx];
  }

  buscarRutas(dato:string) : Rutas[] {
    let rutasArreglo:Rutas[] = [];
    dato = dato.toLocaleLowerCase();
    for(let i = 0; i < this.rutas.length; i++) {
      let ruta = this.rutas[i];
      let nombre = ruta.ciudestino.toLocaleLowerCase() ;
      let nom = ruta.ciuorigen.toLocaleLowerCase();
      if(nombre.indexOf(dato) >= 0) {
        ruta.id = i;
        rutasArreglo.push(ruta);
      }
      if(nom.indexOf(dato) >= 0) {
        ruta.id = i;
        rutasArreglo.push(ruta);
      }
      
    }
    return rutasArreglo;
  }
}

export interface Rutas{
  ciuorigen: string;
  ciudestino: string;
  precio: string;
  descrip: string;
  tipo: string;
  id?: number;
}
