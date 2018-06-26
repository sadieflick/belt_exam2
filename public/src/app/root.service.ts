import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class RootService {

  constructor(private _http: HttpClient) { 
    // this.getProducts();
    // this.getProductByID();
  }

  getProducts(){

    return this._http.get('/api/products');

  }

  getProductByID(product_id){

    console.log("In service, Product id passed: ", product_id)
    return this._http.get('/api/products/' + product_id);

  }

  addNewProduct(newProduct) {
    console.log("In service, Product: ", newProduct);
    return this._http.post('/api/Products', newProduct);
  }

  editProduct(productEdits, product_id) {

    return this._http.patch('/api/Products/'+ product_id, productEdits);
  }

  deleteProduct(product_id) {
    return this._http.delete('/api/Products/' + product_id);
  }
}
