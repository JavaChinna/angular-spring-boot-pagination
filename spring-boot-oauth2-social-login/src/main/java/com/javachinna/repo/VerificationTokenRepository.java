package com.javachinna.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javachinna.model.User;
import com.javachinna.model.VerificationToken;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {

	VerificationToken findByToken(String token);

	VerificationToken findByUser(User user);
}
