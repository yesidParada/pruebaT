import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Solicitud } from '../models/solicitud';
import { Empleado } from '../models/empleado';
import { SolicitudService } from '../services/solicitud.service';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-solicitud-form',
  templateUrl: './solicitud-form.component.html',
  styleUrls: ['./solicitud-form.component.css']
})
export class SolicitudFormComponent implements OnInit {

  public solicitud: Solicitud ={id:0,codigo:'',descripcion:'',resumen:'',empleado:{id:0}};
  public titulo: string = "Crear Solicitud";
  public empleadosList: Empleado[] = [];
  public selected2:Empleado={
    id: 0, nombre: '',
    salario: 0
  };
  
  
  constructor(private solicitudService: SolicitudService,
    private empleadoService: EmpleadoService,
    private router:Router, 
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarSolicitud();
    this.loadEmpleados();
  }

  loadEmpleados(){
    this.empleadoService.getEmpleados().subscribe(data =>{
      this.empleadosList = data
  });
  }
  //Edirar solicitud
  cargarSolicitud(): void{
    this.activateRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.solicitudService.getSolicitudId(id).subscribe((solicitud)=>this.solicitud = solicitud)
      }
    });
  }

  //crear solicitud
  createS(): void{
    console.log(this.solicitud)
    if(this.solicitud.codigo!== '' && this.solicitud.descripcion!== ''&& this.solicitud.resumen!== ''&& this.solicitud.empleado!== '' ){
    this.solicitudService.createAdd(this.solicitud).subscribe(solicitud =>{
    this.router.navigate(['solicitud'])
    Swal.fire('Nuevo solicitud',`Solicitud ${solicitud.codigo} creado con exito!`, 'success')
    }
   );
  }
  }

  //Update solicitud
  update(): void{
    this.solicitudService.update(this.solicitud).subscribe(solicitud => {
      this.router.navigate(['/solicitudes'])
      Swal.fire('Solicitud Actualizada',`Solicitud ${solicitud.codigo} actualizado con exito!`, 'success')
    })
  }

}
