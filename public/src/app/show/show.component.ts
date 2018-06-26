import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RootService } from '../root.service';
import { Injectable }             from '@angular/core';
import { Resolve,
        ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {


  product_id: any;
  product: any;

  constructor(private _rootService: RootService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log("Edit id passed through url=", params['id']) //log the value of id
      this.product_id = params['id'];
      let editObservable = this._rootService.getProductByID(this.product_id)
      editObservable.subscribe(data => {
        console.log("Getting product back to show: ", data);
        this.product = data["data"][0];
      })
  
    });

    
   }
  ngOnInit() {
    // this.getproduct();
  }

  redirectHome() {
    this.router.navigate(['/products']);
  }

  deleteById(product_id) {
    // console.log("cake id: ",cake_id);
    let observable = this._rootService.deleteProduct(product_id);
    observable.subscribe(data => {
      console.log("Data in delete show: ", data)
    });
    this.redirectHome();
  }
}

