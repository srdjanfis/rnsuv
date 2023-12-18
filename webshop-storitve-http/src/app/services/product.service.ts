import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient){
  }
  
  createProduct(p: Product): Observable<any>{
    return this.http.post('/api/product', p);
  }
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('/api/product') 
  }
  
  toggleFavourite(p: Product):Observable<Product>{
    return this.http.patch<Product>('/api/product/' + p.code,
    {
      favorite: !p.favorite
    });
  }
}
