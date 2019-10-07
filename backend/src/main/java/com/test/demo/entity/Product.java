package com.test.demo.entity;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.Collection;

@Entity
@Getter @Setter
public class Product {
    @Id
    @Column(name = "PRODUCT_CODE")

    private @NonNull String productCode;
    private @NonNull String productName;
    private @NonNull Long productCost;
    private @NonNull String productDescription;
    private String typeSell;

    public Product(String productCode, String productName, Long productCost, String productDescription,String typeSell) {
        this.productCode = productCode;
        this.productName = productName;
        this.productCost = productCost;
        this.productDescription = productDescription;
        this.typeSell = typeSell;
    }

    public Product(){}

    public String getTypeSell() {
        return typeSell;
    }

    public void setTypeSell(String typeSell) {
        this.typeSell = typeSell;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Long getProductCost() {
        return productCost;
    }

    public void setProductCost(Long productCost) {
        this.productCost = productCost;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }
}
