import { Component, OnInit } from '@angular/core';
import { DocumentService } from './document.service';
import { Document } from './document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrl: './document.component.css'
})
export class DocumentComponent implements OnInit {

  documents: Document[] = [];
  category: string = '';
  documentoUrl: string = 'https://url-del-documento.com/documento.pdf'; // Asigna la URL del documento aquí


  field: string="";

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void { }


  getDocument(): void {
    this.documentService.getByCategory(this.category).subscribe({
      next: (response) => {
        if (response.status && response.data) {
          this.documents = response.data;
        } else {
          console.error('No se encontraron datos:', response.message);
          this.documents = [];
        }
      },
      error: (error) => {
        console.error('Error al obtener los productos:', error);
        this.documents = [];
      }
    });
  }

  openDocumento(url:string) {

    if (url) {
      window.open(url, '_blank');
    } else {
      console.error('La URL del documento no está definida');
    }
  }
}

