import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductControlService } from 'src/app/shared/product-control.service'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 // displayProduct: string[] = ['idProduct', 'productCode', 'productName', 'operations'];


  private product: Product;


  constructor(private router: Router, private productControl: ProductControlService,
    private httpClient: HttpClient, private rout: ActivatedRoute) { }

  ngOnInit() {

    this.product = this.productControl.getter();

  }


   saveAndUpdate(){
    if(this.product.productCode==undefined){
       this.productControl.postProdct(this.product).subscribe((product)=>{
         
         console.log(product);
         this.router.navigate(['/list-product']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this.productControl.updateProduct(this.product).subscribe((product)=>{
         
         console.log(product);  
         this.router.navigate(['/list-product']);
       },(error)=>{
         console.log(error);
       });
    }
  }


  goProduct() {
    this.router.navigate(['list-product']);
  }
 

}
