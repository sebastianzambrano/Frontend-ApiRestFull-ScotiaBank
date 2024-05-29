import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';

import { HttpClientModule} from '@angular/common/http';
import { Route, RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ProductService } from './product/product.service';
import { DocumentComponent } from './document/document.component';
import { DocumentService } from './document/document.service';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { PqrshistoryComponent } from './pqrshistory/pqrshistory.component';
import { ModalregisterpqrsComponent } from './modalregisterpqrs/modalregisterpqrs.component';
import { PqrshistoryService } from './pqrshistory/pqrshistory.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatDialogModule } from '@angular/material/dialog'; // Importa MatDialogModule
import { ModalregisterpqrsService } from './modalregisterpqrs/modalregisterpqrs.service';
import { ResultComponent } from './result/result.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


const routes:Routes = [
  {path:'',redirectTo:'/main',pathMatch:'full'},
  {path:'body', component:BodyComponent},
  {path:'results', component:ResultComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    DocumentComponent,
    BodyComponent,
    PqrshistoryComponent,
    ModalregisterpqrsComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    NgxChartsModule,
  ],
  providers: [
    ProductService,
    DocumentService,
    PqrshistoryService,
    ModalregisterpqrsService,
    provideAnimationsAsync(), 
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
