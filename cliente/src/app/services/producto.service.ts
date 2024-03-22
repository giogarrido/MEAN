import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  apiURl = 'http://localhost:4000/api/productos/';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.apiURl);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.apiURl + id);
  }

  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.apiURl, producto);
  }

  obtenerProducto(id: string): Observable<any> {
    return this.http.get(this.apiURl + id);
  }

  editarProducto(id: string, producto: Producto): Observable<any> {
    return this.http.put(this.apiURl + id, producto);
  }


}
