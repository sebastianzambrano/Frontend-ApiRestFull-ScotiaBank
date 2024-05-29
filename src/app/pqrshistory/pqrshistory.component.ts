import { Component, OnInit } from '@angular/core';
import { Pqrshistory } from './pqrshistory';
import { PqrshistoryService } from './pqrshistory.service';

@Component({
  selector: 'app-pqrshistory',
  templateUrl: './pqrshistory.component.html',
  styleUrl: './pqrshistory.component.css'
})
export class PqrshistoryComponent implements OnInit {

  pqrshistorys: Pqrshistory[] = [];

  cedula: string = '';

  constructor(private pqrshistoryService: PqrshistoryService) { }

  ngOnInit(): void { }

  getCedula(): void {
    this.pqrshistoryService.getByCedula(this.cedula).subscribe({
      next: (response) => {
        if (response.status && response.data) {
          this.pqrshistorys = response.data;
        } else {
          console.error('No se encontraron datos:', response.message);
          this.pqrshistorys = [];
        }
      },
      error: (error) => {
        console.error('Error al obtener los productos:', error);
        this.pqrshistorys = [];
      }
    });

  }
}
