package com.test.demo.repository;
import com.test.demo.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource

public interface ProductRepository extends JpaRepository<Product,String> {
    Product findByProductCode(String productCode);

}
