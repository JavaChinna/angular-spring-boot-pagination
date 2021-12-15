package com.javachinna.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "product")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@NoArgsConstructor
public class Product extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1493867573442690205L;
	@NonNull
	private String name;
	@NonNull
	private String version;
	@NonNull
	private String edition;
	@NonNull
	private String description;
}
