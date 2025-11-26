package com.example.weather_app.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class WeatherResponse {

    @JsonProperty("name")
    private String name;

    private SysInfo sys;

    private List<WeatherInfo> weather;
    private MainInfo main;
    private WindInfo wind;

    @Data
    public static class SysInfo {
        private String country;
    }

    @Data
    public static class WeatherInfo {
        private int id;
        private String description;
    }

    @Data
    public static class MainInfo {
        private double temp;
        private int humidity;
    }

    @Data
    public static class WindInfo {
        private double speed;
        private double deg;
    }
}
