import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Producto } from '../../models/producto';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,NgIf],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css',
  
  
})


export class CrearProductoComponent {

  productoForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  agregarProducto() {
    console.log(this.productoForm);
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    };
    this.toastr.success('Producto agregado con éxito', 'Producto Agregado');
    this.router.navigate(['/']);
  }
}
