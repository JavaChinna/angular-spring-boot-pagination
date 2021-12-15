package com.javachinna.service;

import com.javachinna.model.User;

public interface MailService {

	void sendVerificationToken(String token, User user);
}
