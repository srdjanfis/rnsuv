import { Injectable, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('/api/product');
  }

  createProduct(p: Product):Observable<any>{
    return this.http.post('/api/product', p);
  }

  changeFavorite(code: string, favorite: boolean):Observable<any>{
    return this.http.patch('/api/product/'+code,
                           { favorite: !favorite }
    );
  }

}
