import { Component, OnInit, Input } from '@angular/core';
import { RootService } from '../root.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  

  // product = {name: "", type: "", description: "", skills: ["", "", ""]};

  constructor(private _rootService: RootService, private router: Router, private route: ActivatedRoute) {
    // this.productEdits = {name: "", skills: ["","",""], type: "", description: ""};
    // this.product = [];
    // this.product_id = 0;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log("Edit id passed through url=", params['id']) //log the value of id
      this.product_id = params['id'];
      let editObservable = this._rootService.getProductByID(this.product_id)
      editObservable.subscribe(data => {
        console.log("Getting product back to edit: ", data);
          this.productEdits = data["data"][0];
          this.saveCopyObject.name = data["data"][0]["name"]
          this.saveCopyObject.qty = data["data"][0]["qty"]
          this.saveCopyObject.price = data["data"][0]["price"];
          console.log("Getting this.productEdits: ", this.productEdits);
      })

    });
  }

  productEdits = { name: "", qty: 0, price: 0 };
  product = [];
  product_id = 0;
  errorMessages = [];
  saveCopyObject = { name: "", qty: 0, price: 0 };


  editSubmit(product_id) {
    console.log("In edit submit");
    console.log("Edit product in on submit: ", this.productEdits)
    let observable = this._rootService.editProduct(this.productEdits, product_id);
    observable.subscribe(data => {
      console.log("in Create observable, data: ", data);
      if(data["error"]) {
        this.errorMessages = data["error"]["errors"];
        console.log("In if in observable create, errormessages: ", this.errorMessages);
      }
      else {
        this.redirectHome();
      }
    });
    // this.productEdits = { name: "", qty: 0, price: 0 };
  }

  redirectHome() {
    this.router.navigate(['/']);
  }
  objectKeys(obj) {
    return Object.keys(obj);
  }

  reset() {
    this.productEdits = this.saveCopyObject;
  }
}
