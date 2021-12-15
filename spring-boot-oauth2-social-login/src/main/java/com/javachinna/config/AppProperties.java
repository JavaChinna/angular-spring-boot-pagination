package com.javachinna.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "app")
public class AppProperties {
	private final Auth auth = new Auth();
	private final OAuth2 oauth2 = new OAuth2();
	private final Client client = new Client();

	@Getter
	@Setter
	public static class Auth {
		private String tokenSecret;
		private long tokenExpirationMsec;
	}

	@Getter
	public static final class OAuth2 {
		private List<String> authorizedRedirectUris = new ArrayList<>();

		public OAuth2 authorizedRedirectUris(List<String> authorizedRedirectUris) {
			this.authorizedRedirectUris = authorizedRedirectUris;
			return this;
		}
	}

	@Getter
	@Setter
	public static class Client {
		private String baseUrl;
	}
}