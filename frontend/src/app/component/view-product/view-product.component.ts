import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductControlService } from 'src/app/shared/product-control.service'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  private sub: any;

  private products: any;

  productCode: any;


  constructor(private router: Router, private productControl: ProductControlService,
    private rout: ActivatedRoute) { }

  ngOnInit() {


    this.sub = this.rout.params.subscribe(params => {
      this.productCode = params;
      console.log(this.productCode);
    });

    this.productControl.getProductbyID(this.productCode.productCode).subscribe(data => {
      this.products = data;
      console.log(data);
    });

  }



  home() {
    this.router.navigate(['home']);
  }
  goProduct() {
    this.router.navigate(['list-product']);
  }
}






