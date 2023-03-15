import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SolicitudComponent } from './Solicitud/solicitud.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoService } from './services/empleado.service';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './empleados/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudFormComponent } from './Solicitud/solicitud-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

  const routes: Routes = [
  {path:'',redirectTo:'/empleados',pathMatch:'full'},
  
  {path:'empleados', component:EmpleadosComponent},
  {path:'empleados/form', component:FormComponent},
  {path:'empleados/form/:id', component:FormComponent},

  
  {path:'solicitud', component:SolicitudComponent},
  {path:'solicitud/form', component:SolicitudFormComponent},
  {path:'solicitud/form/:id', component:SolicitudFormComponent}
]

@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SolicitudComponent,
    EmpleadosComponent,
    FormComponent,
    SolicitudFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
