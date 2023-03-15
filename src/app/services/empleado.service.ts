import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Empleado } from '../models/empleado';
import { EMPLEADOS } from '../empleados/empleados.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlEndPoint: string = "http://localhost:8080/api/empleados";

  private  httpHeaders= new  HttpHeaders({'Content-Type':'application/json' });


constructor(private http: HttpClient, private router: Router) { }


// Listar empleados
getEmpleados(): Observable < Empleado[] > {

  return this.http.get(this.urlEndPoint).pipe(
    map(response => response as Empleado[])
  );
}

// Crear empleado
create(empleado: Empleado) : Observable <Empleado> {
  return this.http.post<Empleado>(this.urlEndPoint, empleado, { headers: this.httpHeaders }).pipe(
    catchError(e=>{
      console.error(e.error.mensaje)
      Swal.fire('Error al crear empleado',e.error.mensaje, 'error');
      return throwError(e);
    })
  );
}

//Buscar por id empleado
getEmpleado(id: any): Observable<Empleado>{
  return this.http.get<Empleado>(`${this.urlEndPoint}/${id}`).pipe(
    catchError(e=>{
      this.router.navigate(['/empleados'])
      console.error(e.error.mensaje)
      Swal.fire('Error al buscar empleado',e.error.mensaje, 'error');
      return throwError(e);
    })
  );
}

//update cliente
update(empleado: Empleado):Observable<Empleado>{
  return this.http.put<Empleado>(`${this.urlEndPoint}/${empleado.id}`,empleado,{headers: this.httpHeaders}).pipe(
    catchError(e=>{
      console.error(e.error.mensaje)
      Swal.fire('Error al crear empleado',e.error.mensaje, 'error');
      return throwError(e);
    })
  );
}

//Eliminar empleado
delete(id: number): Observable<Empleado>{
  return this.http.delete<Empleado>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders}).pipe(
    catchError(e=>{
      console.error(e.error.mensaje)
      Swal.fire('Error al eliminar empleado',e.error.mensaje, 'error');
      return throwError(e);
    })
  );
}
}




