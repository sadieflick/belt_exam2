import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _httpService: RootService, private router: Router) { }

  ngOnInit() {
  }

  newProduct = {name: "", qty: 0, price: 0};


  errorMessages: any;


  onSubmit() {
    console.log("In submit");

    console.log("New Product in on submit: ", this.newProduct)
    let observable = this._httpService.addNewProduct(this.newProduct);
    observable.subscribe(data => {
      console.log("in Create observable, data: ", data);
      if(data["error"]) {
        this.errorMessages = data["error"]["errors"];
        console.log("In if in observable create, errormessages: ", this.errorMessages);
      }
      else {
        this.redirectHome();
      }
    })
    this.newProduct = {name: "", qty: 0, price: 0};
  }

  redirectHome() {
    this.router.navigate(['/']);
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  reset() {
    this.newProduct = {name: "", qty: 0, price: 0};
  }
}
