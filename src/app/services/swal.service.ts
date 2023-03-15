import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
  })
  export class SwalService {
  
    constructor(
      private router: Router
    ) { }
  
  
    loading(){
      Swal.fire({
        title: 'Cargando...',
        heightAuto: false,
        showConfirmButton: false,
        html: '<img src="assets/img/_______.gif" style="width: 100px"></img>',
        allowOutsideClick: false,
      });
      //this.changeTitle();
    }
    loadingEmail(){
      Swal.fire({
        title: 'Enviando correo de solicitud... por favor espere unos segundos.',
        heightAuto: false,
        showConfirmButton: false,
        html: '<img src="assets/img/_______.gif" style="width: 100px"></img>',
        allowOutsideClick: false,
      });
      // this.changeTitle();
    }
    loadingEvent(){
      Swal.fire({
        title: 'Guardando evento de riesgo y enviando correo...',
        heightAuto: false,
        showConfirmButton: false,
        html: '<img src="assets/img/_______.gif" style="width: 100px"></img>',
        allowOutsideClick: false,
      });
      // this.changeTitle();
    }
  
    error(err: any){
  
      if(err.status === 404){
        this.error404();
      }
  
      if(err.status === 401){
        this.error401();
      }
  
      if(err.status === 500){
        this.error500();
      }
  
      if(err.status === 400){
        this.error400();
      }
    }
  
    private error500(){
      Swal.fire({
        title: 'Ha ocurrido un error inesperado, intentelo nuevamente',
        text: 'Error del servidor',
        icon: 'error',
        heightAuto: false,
        allowOutsideClick: false,
      });
    }
  
    private error400(){
      Swal.fire({
        title: 'Ha ocurrido un error inesperado, intentelo nuevamente',
        text: 'Error del servidor',
        icon: 'error',
        heightAuto: false,
        allowOutsideClick: false,
      });
    }
  
    private error404(){
      this.closeSwal();
      return false;
    }
  
    private error401(){
      Swal.fire({
        title: 'Cierre de sesión',
        text: 'Se ha superado del tiempo de espera.',
        icon: 'error',
        heightAuto: false,
        allowOutsideClick: false,
      });
      this.logout();
    }
  
    private errorRepetido(){
      Swal.fire({
        title: 'Causa existe',
        text: 'La causa seleccionada ya fue agregada al riesgo ',
        icon: 'error',
        heightAuto: false,
        allowOutsideClick: false,
      });
      this.logout();
    }
    private logout(){
      this.router.navigateByUrl('/login');
    }
  
    closeSwal(){
      Swal.close();
    }
    DeleteAcepted(){
      Swal.fire({
        title: '<strong>HTML <u>example</u></strong>',
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    }
    success(){
      Swal.fire({
        icon: 'success',
        title: 'Exito!',
        text: 'Registrado con exito',
        heightAuto: false,
        showCancelButton: false,
        allowOutsideClick: false,
        confirmButtonText: 'Ok'
      });
    }
    successER(){
      Swal.fire({
        icon: 'success',
        title: 'Exito!',
        text: 'Registrado y enviado con exito',
        heightAuto: false,
        showCancelButton: false,
        allowOutsideClick: false,
        confirmButtonText: 'Ok'
      });
    }
    successEmail(){
      Swal.fire({
        icon: 'success',
        title: 'Exito!',
        text: 'Se ha enviado el correo exitosamente',
        heightAuto: false,
        showCancelButton: false,
        allowOutsideClick: false,
        confirmButtonText: 'Ok'
      });
    }
    successDelete(){
      Swal.fire({
        icon: 'success',
        title: 'Exito!',
        text: 'Se ha eliminado correctamente',
        heightAuto: false,
        showCancelButton: false,
        allowOutsideClick: false,
        confirmButtonText: 'Ok'
      });
    }
  
    successState(){
      Swal.fire({
        icon: 'success',
        title: 'Exito!',
        text: 'Transacción aprobada!',
        heightAuto: false,
        showCancelButton: false,
        allowOutsideClick: false,
        confirmButtonText: 'Ok'
      });
    }
  
    errorType(err: any){
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error, intentelo nuevamente',
        text: 'El tipo de archivo no esta permitido. Tipo de archivo permitido: ejemplo.xlsx',
        heightAuto: false,
        showCancelButton: false,
        allowOutsideClick: false,
        confirmButtonText: 'Ok'
      });
    }
    errorSize(err: any){
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error, intentelo nuevamente',
        text: 'Tamaño del archivo excedido',
        heightAuto: false,
        showCancelButton: false,
        allowOutsideClick: false,
        confirmButtonText: 'Ok'
      });
    }
    errorExist(err: any){
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error, intentelo nuevamente',
        text: 'El archivo ya fue registrado',
        heightAuto: false,
        showCancelButton: false,
        allowOutsideClick: false,
        confirmButtonText: 'Ok'
      });
    }
  
    errorN(err: any){
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error, intentelo nuevamente',
        text: 'Error inesperado',
        heightAuto: false,
        showCancelButton: false,
        allowOutsideClick: false,
        confirmButtonText: 'Ok'
      });
    }
  
    DeleteAcepteds(){
      Swal.fire({
        title: '<strong>HTML <u>example</u></strong>',
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    }
  }