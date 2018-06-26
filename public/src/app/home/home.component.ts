import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _rootService: RootService) { }

  ngOnInit() {
    this.getProductsFromService();
  }

  products = [];

  editProduct(product) {
    console.log("product to edit: ", product);
    return product;
    // this.editingproduct = true;
  }

  getProductsFromService(){
    
    let observable = this._rootService.getProducts();
    observable.subscribe(data => {
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
      // This may be different for you, depending on how you set up your Task API.copy
      this.products = data["data"];
      console.log("all products: ", this.products);
      
    });

  }

}
