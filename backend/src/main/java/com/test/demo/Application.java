package com.test.demo;

import com.test.demo.entity.Product;
import com.test.demo.repository.ProductRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;

import java.text.ParseException;

import java.util.stream.Stream;


@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	ApplicationRunner init(ProductRepository productRepository) {

		return args -> {

			setProduct1();
			setProduct2();
			setProduct3();
			setProduct4();
			setProduct5();
			setProduct6();
		};
	}

	@Autowired ProductRepository productRepository;


	public void setProduct1() throws ParseException {

		Product product = new Product();

		product.setProductCode("AC1234");
		product.setProductName("iPhone 11");
		product.setProductCost(23000L);
		product.setProductDescription("ทั้งระบบกล้องคู่ใหม่ที่ให้คุณเก็บภาพสิ่งที่คุณเห็นและรักได้เต็มตามากขึ้น ชิพที่เร็วที่สุดเท่าที่เคยมีมาในสมาร์ทโฟน และแบตเตอรี่ที่ใช้งานได้ตลอดวันที่ให้คุณทำอะไรๆ ได้มากขึ้นแต่ชาร์จน้อยลง");
		product.setTypeSell("Best Seller");

		productRepository.save(product);
	}

	public void setProduct2() throws ParseException {
        Product product = new Product();

        product.setProductCode("AB1223");
        product.setProductName("iPhone 6s");
        product.setProductCost(12000L);
        product.setProductDescription("ทั้งระบบกล้องคู่ใหม่ที่ให้คุณเก็บภาพสิ่งที่คุณเห็นและรักได้เต็มตามากขึ้น ชิพที่เร็วที่สุดเท่าที่เคยมีมาในสมาร์ทโฟน และแบตเตอรี่ที่ใช้งานได้ตลอดวันที่ให้คุณทำอะไรๆ ได้มากขึ้นแต่ชาร์จน้อยลง");
        product.setTypeSell("");

        productRepository.save(product);
    }
    public void setProduct3() throws ParseException {

        Product product = new Product();

        product.setProductCode("BT1444");
        product.setProductName("BT21 TATA");
        product.setProductCost(2000L);
        product.setProductDescription("Off-the-wall, curious soul! Prince TATA from planet BT, has a super stretchy body as well as super natural powers. #PlanetBT #offthewall #superpowers #Prince");
        product.setTypeSell("Best Seller");

        productRepository.save(product);
    }

	public void setProduct4() throws ParseException {

		Product product = new Product();

		product.setProductCode("BT1723");
		product.setProductName("BT21 RJ");
		product.setProductCost(2000L);
		product.setProductDescription("Kind, loving, foodie! RJ loves to both cook and eat. RJ's fluffy fur and warm heart makes everyone feel they're at home. #greetings #gentlesoul #parka #omnomnom");
		product.setTypeSell("");

		productRepository.save(product);
	}

	public void setProduct5() throws ParseException {

		Product product = new Product();

		product.setProductCode("BT2344");
		product.setProductName("BT21 KOYO");
		product.setProductCost(2000L);
		product.setProductDescription("Smart sleepyhead! Exceptionally bright and talented KOYA. Sleeping cutie full of thoughts and thoughts of sleeping. #talented #pillow #droopyeyes #removableears");
		product.setTypeSell("Best Seller");

		productRepository.save(product);
	}
	public void setProduct6() throws ParseException {

		Product product = new Product();

		product.setProductCode("BT1357");
		product.setProductName("BT21 CHIMMY");
		product.setProductCost(2000L);
		product.setProductDescription("Innocent, \"work hard, play hard\"! CHIMMY enjoys wearing a yellow hoodie, and is born with a passion to work hard on everything, no matter what. #passion #workhard #playhard #harmonica #yellowhoodie");
		product.setTypeSell("Best Seller");

		productRepository.save(product);
	}

}
