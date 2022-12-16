import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';
  nombre = 'Pedro Velazquez';
  edad = 24;
  email = 'pavg.9286@gmail.com';
  sueldos = [2321, 1213, 2320];
  activo = true;
  sitio = 'https://www.google.com';

  esActivo() {
    if(this.activo){
      return 'Trabajador activo';
    }else {
      return 'Trabajador inactivo';
    }
  }

  ultimosSueldos() {
    let sum = 0;
    for (let i = 0; i < this.sueldos.length; i++) {
      sum += this.sueldos[i];
    }

    return sum;
  }
}
