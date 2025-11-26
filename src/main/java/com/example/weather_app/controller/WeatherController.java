package com.example.weather_app.controller;

import com.example.weather_app.model.WeatherResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Controller
public class WeatherController {

    @Value("${api.key}")
    private String apiKey;

    @GetMapping("/")
    public String getIndex() {
        return "index";   // loads index.html
    }

    // ✔ FIXED — JS URL must match controller
    @GetMapping("/api/weather")
    public ResponseEntity<?> getWeatherJson(@RequestParam("city") String city) {

        String url = "https://api.openweathermap.org/data/2.5/weather?q="
                + city + "&appid=" + apiKey + "&units=metric";

        RestTemplate restTemplate = new RestTemplate();

        try {
            WeatherResponse weatherResponse =
                    restTemplate.getForObject(url, WeatherResponse.class);

            if (weatherResponse == null) {
                return ResponseEntity.status(404).body(Map.of("error", "City not found"));
            }

            Map<String, Object> result = Map.of(
                    "name", weatherResponse.getName(),
                    "sys", weatherResponse.getSys(),
                    "main", weatherResponse.getMain(),
                    "weather", weatherResponse.getWeather(),
                    "wind", weatherResponse.getWind()
            );

            return ResponseEntity.ok(result);

        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(Map.of("error", "Something went wrong"));
        }
    }
}
