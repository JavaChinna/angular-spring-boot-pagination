package com.javachinna.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface Service<T, R> {
	T save(R r);

	void update(Long id, R r);

	void deleteById(Long id);

	Optional<T> findById(Long id);

	Page<T> findAll(Pageable pageable);
}
