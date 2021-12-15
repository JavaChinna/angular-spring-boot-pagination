package com.javachinna.controller;

import static com.javachinna.config.AppConstants.ID;

import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javachinna.config.AppConstants;
import com.javachinna.dto.ApiResponse;
import com.javachinna.dto.ProductRequest;
import com.javachinna.exception.ResourceNotFoundException;
import com.javachinna.model.Product;
import com.javachinna.service.ProductService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(path = "/api/products")
@RequiredArgsConstructor
public class ProductController {

	private final ProductService productService;

	@GetMapping
	public Page<Product> getProductList(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "3") int size) {
		Pageable paging = PageRequest.of(page, size);
		return productService.findAll(paging);
	}

	@GetMapping("/{id}")
	public Product getProduct(@PathVariable Long id) {
		return productService.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product", ID, id));
	}

	@PostMapping
	public ResponseEntity<?> createProduct(@Valid @RequestBody ProductRequest product) {
		productService.save(product);
		return ResponseEntity.ok().body(new ApiResponse(true, AppConstants.SUCCESS));
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateProduct(@PathVariable Long id, @Valid @RequestBody ProductRequest productRequest) {
		productService.update(id, productRequest);
		return ResponseEntity.ok().body(new ApiResponse(true, AppConstants.SUCCESS));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
		return productService.findById(id).map(p -> {
			productService.deleteById(id);
			return ResponseEntity.ok().body(new ApiResponse(true, AppConstants.SUCCESS));
		}).orElseThrow(() -> new ResourceNotFoundException("Product", ID, id));
	}
}
