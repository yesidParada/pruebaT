export interface empleado{
    id: number;
    nombre?:string
}
export interface Solicitud {
    
    id: number;
    codigo: string ;
    descripcion: string ;
    resumen: string ;
    empleado: empleado;
  
    

}