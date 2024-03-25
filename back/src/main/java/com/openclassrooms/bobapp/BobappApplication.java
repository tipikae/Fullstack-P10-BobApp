package com.openclassrooms.bobapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * BobApp application main class.
 * @version 1.0
 */
@SpringBootApplication
public class BobappApplication {

	/**
	 * Application entrypoint.
	 * @param args Arguments
	 */
	public static void main(String[] args) {
		SpringApplication.run(BobappApplication.class, args);
	}

}
