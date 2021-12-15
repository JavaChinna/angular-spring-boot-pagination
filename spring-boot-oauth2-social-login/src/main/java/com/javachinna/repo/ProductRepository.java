package com.javachinna.repo;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.javachinna.model.Product;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {

}
