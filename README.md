# 🌤️ Weather Application

A simple and efficient **Weather Application** built with a **Java Spring Boot backend** and a **HTML, CSS, JavaScript frontend**.
The app fetches live weather details using an external weather API and displays real-time data such as temperature, humidity, wind speed, and weather conditions.

---

## 🚀 Features

* Real-time weather data fetching
* Clean and responsive UI
* City-based weather search
* API integration using Spring Boot
* Error handling for invalid city inputs

---

## 🛠️ Tech Stack

### **Backend**

* Java
* Spring Boot
* RestTemplate / WebClient
* Weather API Integration

### **Frontend**

* HTML
* CSS
* JavaScript (Fetch API)

---

## 📁 Project Structure

```
/backend
   └── src/main/java/.../controller
   └── src/main/java/.../service
   └── src/main/java/.../model

/frontend
   └── index.html
   └── index.css
   └── index.js
```

---

## ▶️ How to Run the Project

### **Backend**

1. Clone the repository
2. Add your Weather API key in `application.properties`
3. Run the Spring Boot application
4. Backend will start on:

   ```
   http://localhost:8080
   ```

### **Frontend**

1. Open `index.html` in any browser
2. Enter a city name and get instant weather data

---

## 📌 API Endpoint

```
GET /api/weather?city={cityName}
```

---

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

This project is released under the MIT License.

---
