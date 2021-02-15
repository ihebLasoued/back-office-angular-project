import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  addProduct(product:Product) {
    return this.http.post(Config.baseUrl+"/addProduct", product);
  }

  listeProduct() {
    return this.http.get<Product[]>(Config.baseUrl+"/allProduct");
  }
  deleteProduct(id:number) {
    return this.http.delete(Config.baseUrl+"/deleteProduct/"+id);
  }
  getProductById(id:number) {
    return this.http.get<Product>(Config.baseUrl+"/Product/"+id);
  }
  updateProduct(id:number,product : Product) {
    return this.http.put(Config.baseUrl+"/updateProduct/"+id,product);
  }

}
