import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../models/empleado';
import { EmpleadoService } from '../services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
  
})
export class FormComponent implements OnInit {
  
  public empleado: Empleado = new Empleado();
  public titulo: string = "Crear Empleado";
  
  constructor(private empleadoService: EmpleadoService,
    private router:Router, 
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEmpleado();
  }
  
  //Edirar empleado
  cargarEmpleado(): void{
    this.activateRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.empleadoService.getEmpleado(id).subscribe((empleado)=>this.empleado = empleado)
      }
    });
  }

  //crear empleado
  create(): void{
    if(this.empleado.nombre!== '' && this.empleado.salario > 0){
    this.empleadoService.create(this.empleado).subscribe(empleado =>{
    this.router.navigate(['/empleados'])
    Swal.fire('Nuevo empleado',`Empleado ${empleado.nombre} creado con exito!`, 'success')
    }
   );
  }
  }

  //Update empleado
  update(): void{
    this.empleadoService.update(this.empleado)
    .subscribe(empleado => {
      this.router.navigate(['/empleados'])
      Swal.fire('Empleado Actualizado',`Empleado ${empleado.nombre} actualizado con exito!`, 'success')
    })
  }
}
