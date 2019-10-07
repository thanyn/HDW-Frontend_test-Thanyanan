import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductControlService } from 'src/app/shared/product-control.service'
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/shared/product'
import { from } from 'rxjs';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  searchTerm : string;
  products: Product[];



  constructor(private router: Router, private productControl: ProductControlService,
    private httpClient: HttpClient) { }

  ngOnInit() {


    this.productControl.getAllProduct().subscribe((products)=>{
      this.products=products;
      console.log(products);
    },(error)=>{
      console.log(error);
    })
  }


view(element):void{
  this.router.navigate(['/view-product/'+element.productCode]);
}

editProduct(){
  this.router.navigate(['/add-product/']);
}


deleteProduct(prouct){
  this.productControl.deleteProduct(prouct.productCode).subscribe((data)=>{
      this.products.splice(this.products.indexOf(prouct),1);
  },(error)=>{
    console.log(error);
  });
}


updateProduct(product){  
  this.productControl.setter(product);
  this.router.navigate(['/add-product']);
}

newProduct(){
  let product = new Product();
   this.productControl.setter(product);
    this.router.navigate(['/add-product']);
  
  }

}
