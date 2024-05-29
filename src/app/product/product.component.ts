import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { ModalregisterpqrsService } from '../modalregisterpqrs/modalregisterpqrs.service';
import { ModalregisterpqrsComponent } from '../modalregisterpqrs/modalregisterpqrs.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  cedula: string = '';

  constructor(private productService: ProductService, private dialog: MatDialog, private modalDataService: ModalregisterpqrsService) { }

  ngOnInit(): void { }

  getCedula(): void {
    this.productService.getByCedula(this.cedula).subscribe({
      next: (response) => {
        if (response.status && response.data) {
          this.products = response.data;
        } else {
          console.error('No se encontraron datos:', response.message);
          this.products = [];
        }
      },
      error: (error) => {
        console.error('Error al obtener los productos:', error);
        this.products = [];
      }
    });
  }

  abrirModal(): void {
    const dialogRef = this.dialog.open(ModalregisterpqrsComponent, {
      width: '600px', // Ancho de la ventana modal
      height: '400px', // Altura de la ventana modal
    });
  }



}
