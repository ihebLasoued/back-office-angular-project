import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  addProduct(dataProduct:any) {
    return this.http.post("http://127.0.0.1:8000/api/addProduct", dataProduct);
  }

  listeProduct() {
    return this.http.get<Product[]>("http://127.0.0.1:8000/api/allProduct");
  }
  deleteProduct(product : Product) {
    return this.http.post("http://127.0.0.1:8000/api/deleteProduct",product );
  }

}
