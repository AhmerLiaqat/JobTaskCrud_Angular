import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'http://localhost:5119/';
  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/Product`);
  }
  
  addProducts(newProduct: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}api/Product`, newProduct, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  UpdateProducts(newProduct: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}api/Product/${newProduct.id}`, newProduct, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}api/Product/${productId}`); 
  }
}
