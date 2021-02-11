import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  addProduct(product:Product) {
    return this.http.post("http://127.0.0.1:8000/api/addProduct", product);
  }

  listeProduct() {
    return this.http.get<Product[]>("http://127.0.0.1:8000/api/allProduct");
  }
  deleteProduct(product : Product) {
    return this.http.post("http://127.0.0.1:8000/api/deleteProduct",product );
  }
  getProductById(id:number) {
    return this.http.get<Product>("http://127.0.0.1:8000/api/Product/"+id);
  }
  updateProduct(product:Product) {
    return this.http.post("http://127.0.0.1:8000/api/updateProduct", product);
  }

}
