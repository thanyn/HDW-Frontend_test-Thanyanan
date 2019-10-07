package com.test.demo.controller;
import com.test.demo.entity.Product;
import com.test.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders="*")
public class ProductController {
    @Autowired ProductRepository productRepository;


    public ProductController (ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    @PostMapping(path = "/product")
    public Product postProduct(
            @RequestBody Product product) {

        return productRepository.save(product);
    }

    @PutMapping(path = "/product")
    public Product putProduct(@RequestBody Product product) {

        return productRepository.save(product);
    }

    @GetMapping(path = "/products", produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<Product> getProducts() {
        return productRepository.findAll().stream().collect(Collectors.toList());
    }


    @GetMapping("/product/{productCode}")
    public Product getUser(@PathVariable String productCode) {
        return productRepository.findById(productCode).get();
    }

    @DeleteMapping(path = "/product/{productCode}", produces = MediaType.APPLICATION_JSON_VALUE)
    public void deleteProduct (@PathVariable String productCode) {
        productRepository.deleteById(productCode);
        System.out.println("Debug --> (Delete Product) ID : "+productCode );
    }

}
