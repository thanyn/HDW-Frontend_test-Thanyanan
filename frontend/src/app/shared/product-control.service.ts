import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders  } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable , throwError } from 'rxjs';
import { Product } from '../shared/product'
import { from } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ProductControlService {

  constructor(private httpClient: HttpClient) { }

  private product = new Product();

  setter(product: Product) {
    this.product = product;
  }

  getter() {
    return this.product;
  }

  public postProdct(product: Product) {
    return this.httpClient.post('//localhost:8080/product/', (product))
  }

  public updateProduct(product: Product) {
    return this.httpClient.put('//localhost:8080/product/', (product))
  }

  public getAllProduct(): Observable<any> {
    return this.httpClient.get('//localhost:8080/products');
  }

  public getProductbyID(productCode: string){
    return this.httpClient.get('//localhost:8080/product/' + productCode);
  }


  public deleteProduct(productCode) {
    return this.httpClient.delete('//localhost:8080/product/' + productCode);
  } 


}

