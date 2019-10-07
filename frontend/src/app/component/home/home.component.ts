import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductControlService } from 'src/app/shared/product-control.service'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  searchTerm : string;

  private products: Array<any>;
 
  Product: Array<any>;

  constructor(private router: Router, private productControl: ProductControlService,
    private httpClient: HttpClient, private rout: ActivatedRoute) { }

  ngOnInit() {
 

    this.productControl.getAllProduct().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  } 

  goProduct() {
    this.router.navigate(['list-product']);
  }



  view(products): void {
    this.router.navigate(['/view-product/' + products.productCode]);
  }




}
