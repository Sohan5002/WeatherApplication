package com.example.weather_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.thymeleaf.spring6.web.webflux.ISpringWebFluxWebApplication;

@SpringBootApplication
@EnableCaching
public class WeatherAppApplication {
	public static void main(String[] args) {
		SpringApplication.run(WeatherAppApplication.class,args);

	}
}
