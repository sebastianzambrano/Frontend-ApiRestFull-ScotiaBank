import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts'; //
import { Result } from './result';
import { ResultTime } from './resulttime';
import { ResultService } from './result.service'

import { ApexOptions } from 'ng-apexcharts'; // I


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})

export class ResultComponent {

  results: Result[] = [];
  single: any[] = []; // Aquí se almacenarán los datos para la gráfica

  resultsTime: ResultTime[] = [];
  singleTime: any[] = []; // Aquí se almacenarán los datos para la gráfica

  fecha: string = '';

  constructor(private resultService: ResultService) { }

  ngOnInit(): void { }

  getPqrsByDate(): void {
    if (!this.fecha) {
      console.error('La fecha está vacía');
      return;
    }
    this.resultService.getPqrsByDate(this.fecha).subscribe({
      next: (response) => {
        if (response.status && response.data) {
          this.results = response.data;

          this.single = response.data.map((result: Result) => {
            return {
              name: result.typePqrs,
              value: result.cantidadLlamadasAtendidas
            };
          });

        } else {
          console.error('No se encontraron datos:', response.message);
          this.results = [];
          this.single = []; // Reiniciar el array de datos de la gráfica
        }
      },
      error: (error) => {
        console.error('Error al obtener los productos:', error);
        this.results = [];
        this.single = []; // Reiniciar el array de datos de la gráfica
      }
    });
  }

  getPqrsByTime(): void {
    this.resultService.getPqrsByTime().subscribe({
      next: (response) => {
        if (response.status && response.data) {
          this.resultsTime = response.data;

          this.singleTime = response.data.map((resultTime: ResultTime) => {
            return {
              name: resultTime.typePqrs,
              value: resultTime.promedioTiempo
            }
          });

        } else {
          console.error('No se encontraron datos:', response.message);
          this.resultsTime = [];
          this.singleTime = []; // Reiniciar el array de datos de la gráfica
        }
      },
      error: (error) => {
        console.error('Error al obtener los productos:', error);
        this.resultsTime = [];
        this.singleTime = []; // Reiniciar el array de datos de la gráfica
      }
    });
  }

  view: [number, number] = [900, 400];
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  






}




