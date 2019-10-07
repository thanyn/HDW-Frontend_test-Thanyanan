import { PipeTransform, Pipe } from '@angular/core';
import { Product } from 'src/app/shared/product'

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
    transform(products: Product[], searchTerm: string): Product[] {
        if (!products || !searchTerm) {
            return products;
        }

        return products.filter(product =>
            product.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);


    }


}
