package com.javachinna.service.impl;

import static com.javachinna.config.AppConstants.ID;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.javachinna.dto.ProductRequest;
import com.javachinna.exception.ResourceNotFoundException;
import com.javachinna.model.Product;
import com.javachinna.repo.ProductRepository;
import com.javachinna.service.ProductService;;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Override
	public Product save(ProductRequest productRequest) {
		Product product = new Product();
		BeanUtils.copyProperties(productRequest, product);
		return productRepository.save(product);
	}

	@Override
	public void deleteById(Long id) {
		productRepository.deleteById(id);
	}

	@Override
	public Optional<Product> findById(Long id) {
		return productRepository.findById(id);
	}

	@Override
	public Page<Product> findAll(Pageable pageable) {
		return productRepository.findAll(pageable);
	}

	@Override
	public void update(Long id, ProductRequest productRequest) {
		findById(id).map(p -> {
			BeanUtils.copyProperties(productRequest, p);
			return productRepository.save(p);
		}).orElseThrow(() -> new ResourceNotFoundException("Product", ID, id));
	}
}
