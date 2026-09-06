# ☀️ Solar Panel Smart Tracking Simulator

An interactive web-based simulation of a smart solar tracking system built using **React and Vite**.

This project demonstrates how a solar panel can change its orientation according to the changing position of sunlight and estimate the corresponding power generation.

🔗 **Live Demo:** https://solar-panel-smart-tracking-simulato.vercel.app/

---

## 📌 Project Overview

Solar panels receive maximum energy when sunlight falls on them with better alignment.

However, the apparent position of the Sun changes continuously from morning to evening. A fixed solar panel cannot maintain the same alignment throughout the day.

The **Solar Panel Smart Tracking Simulator** digitally simulates this tracking process.

The simulator takes the Sun's position as input, calculates the required panel angle, rotates the virtual solar panel, estimates power generation, and displays the results using an interactive dashboard.

### Basic Working

**Sun Position → Angle Calculation → Panel Rotation → Power Estimation → Status → Comparison → Graph**

---

## 🎯 Objectives

* Simulate a solar tracking system using software.
* Understand solar panel orientation and tracking.
* Demonstrate basic control-system logic.
* Calculate an estimated power output based on panel alignment.
* Compare fixed-panel and tracking-panel power.
* Visualize power variation using a live graph.
* Connect EEE concepts with modern web development.

---

## ☀️ Solar Tracking Concept

Solar tracking is a technique used to change the orientation of a solar panel according to the position of the Sun.

### Single-Axis Tracking

A single-axis tracker rotates the panel around one axis.

This project demonstrates the concept using a software-based single-axis tracking simulation.

### Dual-Axis Tracking

A dual-axis tracker can adjust the panel in two directions:

* Horizontal movement
* Vertical movement

Dual-axis tracking is considered as a future extension of this project.

---

## ⚙️ How the Simulator Works

### 1. Sun Position

The user changes the Sun position using the slider.

### 2. Tracking Angle

The simulator calculates the required panel angle.

```text
Tracking Angle = Sun Position - 50
```

The calculated value determines the required direction of panel movement.

* Positive angle → Panel moves right
* Negative angle → Panel moves left
* Near zero → Panel remains near the center

### 3. Panel Rotation

The virtual solar panel rotates according to the calculated tracking angle.

### 4. Alignment Calculation

The simulator uses a cosine-based alignment factor.

```text
Alignment Factor = cos(Angle)
```

Better alignment results in a higher estimated power value.

### 5. Estimated Power

The simulator calculates estimated power using the alignment factor.

```text
Estimated Power = Maximum Power × Alignment Factor
```

The calculation is used only for educational simulation purposes and does not represent real-time electrical measurement.

### 6. Tracking Status

The system identifies the tracking condition based on the panel alignment.

Example statuses:

* Perfect
* Good
* Low

### 7. Power Comparison

The simulator compares the estimated tracking power with a simplified fixed-panel reference value.

```text
Improvement (%) =
((Tracking Power - Fixed Power) / Fixed Power) × 100
```

### 8. Power Graph

The simulator records the changing power values and displays them using a live graph.

---

## 🖥️ Simulator Features

### ☀️ Sun Position Control

Interactive control for changing the simulated Sun position.

### 🔄 Automatic Tracking

The panel can automatically follow the changing Sun position.

### 🎚️ Tracking Speed

Tracking speed can be adjusted to observe different tracking responses.

### 🎛️ Manual / Automatic Operation

The simulator supports interactive tracking control.

### ⚡ Power Estimation

Estimated power changes according to panel alignment.

### 📊 Fixed vs Tracking Comparison

The system compares tracking performance with a simplified fixed-panel reference.

### 📈 Live Power Graph

Power variation is visualized using an interactive graph.

### 🔄 Reset Function

The simulation can be returned to its initial state.

### 📱 Responsive Interface

The interface is designed to work across desktop and smaller screens.

---

## 🖼️ Project Interface

> Screenshots of the actual simulator interface will be added here.

### Main Simulator Dashboard

```text
images/main-dashboard.png
```

### Automatic Tracking

```text
images/auto-tracking.png
```

### Power Monitoring

```text
images/power-monitoring.png
```

### Mobile Responsive View

```text
images/mobile-view.png
```

---

## 🏗️ Software Architecture

The application is developed using a component-based React architecture.

```text
                    Solar Tracking Simulator
                              │
                              ▼
                       App.jsx Controller
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
     Sun Position        Tracking Logic      Power Calculation
          │                   │                   │
          ▼                   ▼                   ▼
       Sun.jsx          SolarPanel.jsx      PowerDisplay.jsx
                              │
                              ▼
                      TrackingStatus.jsx
                              │
                  ┌───────────┴───────────┐
                  ▼                       ▼
             Comparison.jsx          PowerGraph.jsx
```

---

## 📂 Project Structure

```text
solar-panel-smart-tracking-simulator/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── SolarPanel.jsx
│   │   ├── Sun.jsx
│   │   ├── PowerDisplay.jsx
│   │   ├── TrackingStatus.jsx
│   │   ├── Comparison.jsx
│   │   └── PowerGraph.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🔌 Hardware Equivalent

Although this project is software-based, the same concept can be implemented using physical electrical and electronic components.

### Hardware Components

* Solar Panel
* LDR Sensors
* Arduino / ESP32
* Servo Motor
* Voltage Sensor
* Current Sensor
* Battery / Low-Voltage Supply
* Display or IoT Dashboard

### Hardware Working

```text
Sunlight
   ↓
LDR Sensors
   ↓
Arduino / ESP32
   ↓
Tracking Angle Calculation
   ↓
Servo Motor
   ↓
Solar Panel Rotation
   ↓
Voltage & Current Measurement
   ↓
Power Calculation
   ↓
Display / IoT Dashboard
```

---

## 🔗 Software → Hardware Mapping

| Software Simulator     | Hardware Equivalent       |
| ---------------------- | ------------------------- |
| Sun Position Slider    | LDR Sensor Array          |
| Tracking Angle Formula | Arduino / ESP32 Algorithm |
| Virtual Panel Rotation | Servo Motor               |
| Estimated Power        | Voltage × Current         |
| Power Graph            | Display / IoT Dashboard   |
| Auto Tracking          | Automatic Motor Control   |
| Tracking Status        | Controller Decision Logic |

---

## 🧮 Electrical & Mathematical Calculations

### Tracking Angle

```text
Angle = Sun Position - 50
```

### Alignment Factor

```text
Alignment Factor = cos(Angle in radians)
```

### Estimated Power

```text
P_estimated = P_max × Alignment Factor
```

### Actual Electrical Power

For a real hardware implementation:

```text
P = V × I
```

Where:

* `P` = Electrical Power in Watts
* `V` = Voltage in Volts
* `I` = Current in Amperes

> The current simulator estimates power mathematically. It does not measure real voltage or current.

---

## 🔄 Data Flow

```text
User Input
    ↓
Sun Position
    ↓
Tracking Angle
    ↓
Panel Rotation
    ↓
Alignment Factor
    ↓
Estimated Power
    ↓
Tracking Status
    ↓
Fixed vs Tracking Comparison
    ↓
Power Graph
```

---

## 🤖 Automatic Tracking Logic

The automatic tracking mode continuously updates the simulated panel position.

The application uses React state and timed updates to simulate the movement of a tracking mechanism.

Conceptually:

```text
Start Auto Mode
       ↓
Read Sun Position
       ↓
Calculate Required Angle
       ↓
Move Panel
       ↓
Calculate Power
       ↓
Update Display & Graph
       ↓
Repeat
```

The tracking speed controls how quickly the simulated panel responds to changes in Sun position.

---

## 🧪 Testing & Results

The simulator can be tested using different operating conditions.

| Test Case       | Input / Action         | Expected Result                      |
| --------------- | ---------------------- | ------------------------------------ |
| Reset           | Click Reset            | Simulator returns to initial state   |
| Center Position | Sun near 50            | Panel remains near center            |
| Left Position   | Lower Sun position     | Panel moves left                     |
| Right Position  | Higher Sun position    | Panel moves right                    |
| Manual Tracking | Change slider          | Panel angle and power update         |
| Auto Tracking   | Enable Auto Mode       | Panel follows simulated Sun movement |
| Speed Control   | Change tracking speed  | Tracking response changes            |
| Power Variation | Change Sun position    | Estimated power changes              |
| Graph           | Move through positions | Power history is displayed           |
| Comparison      | Tracking active        | Fixed vs tracking values are shown   |

---

## ⚠️ Limitations

This project is a software simulation and has several limitations.

* No physical solar panel is connected.
* No real LDR sensors are used.
* No actual servo motor is used.
* Voltage and current are not physically measured.
* Weather conditions are not considered.
* Cloud coverage is not simulated.
* Temperature effects are not included.
* Solar panel shading is not modeled.
* Motor power consumption is not considered.
* Power output is an educational mathematical estimate.
* The current model demonstrates single-axis tracking.

---

## 🚀 Future Scope

The project can be extended into a complete EEE + IoT + AI system.

### 🔧 Hardware Implementation

Connect the software concept to:

* Arduino / ESP32
* LDR sensors
* Servo motors
* Solar panel
* Voltage and current sensors

### 🌐 IoT Monitoring

Real-time electrical data can be transmitted to an IoT dashboard.

### 📡 Remote Monitoring

Users could monitor:

* Voltage
* Current
* Power
* Energy
* Panel angle
* Tracking status

### 🤖 AI / Machine Learning

Machine learning can be added for:

* Solar power prediction
* Weather-based generation prediction
* Panel fault detection
* Performance optimization
* Predictive maintenance

### ☀️ Dual-Axis Tracking

The simulator can be upgraded to control both horizontal and vertical panel movement.

### 📊 Historical Analytics

A database can be added to store and analyze long-term solar generation data.

---

## 🛠️ Technologies Used

| Technology | Purpose                                  |
| ---------- | ---------------------------------------- |
| React      | User interface and component development |
| Vite       | Development and build environment        |
| JavaScript | Simulation logic and calculations        |
| CSS        | Interface design and animations          |
| SVG        | Power graph visualization                |
| Git        | Version control                          |
| GitHub     | Source-code hosting                      |
| Vercel     | Web deployment                           |

---

## ⚡ EEE Concepts Demonstrated

This project connects software development with Electrical and Electronics Engineering concepts.

* Solar Energy
* Photovoltaic Systems
* Solar Tracking
* Control Systems
* Sensors
* Servo Motor Control
* Electrical Power
* Voltage and Current
* Renewable Energy
* Automation
* IoT Concepts
* Embedded Systems

---

## 🎓 Learning Outcomes

Through this project, the following concepts were practiced:

* Understanding solar tracking systems
* Converting an EEE concept into a software simulation
* React component-based development
* JavaScript state management
* Mathematical power estimation
* Interactive UI development
* Data visualization
* Git and GitHub workflow
* Vercel deployment
* Software-to-hardware system mapping

---

## 🌐 Live Project

🚀 **Live Demo:**
https://solar-panel-smart-tracking-simulato.vercel.app/

The application can be opened directly in a web browser without requiring physical hardware.

---

## ⭐ Project Highlights

```text
☀️ Solar Tracking Simulation
⚡ EEE + Software Integration
🔄 Automatic Panel Tracking
🎛️ Manual / Auto Control
📊 Power Comparison
📈 Live Power Visualization
🌐 Web-Based Interface
📱 Responsive Design
🚀 Vercel Deployment
🐙 GitHub Version Control
```

---

## 👨‍💻 Developer

### KURUKUNDA YAGANTI ESWAR

**B.Tech – Electrical and Electronics Engineering**

Interested in:

* Electrical Engineering
* Renewable Energy
* Embedded Systems
* IoT
* Artificial Intelligence
* Automation
* Web Development

---

## 📌 Project Type

**Academic / Educational Software Simulation**

**Domain:** Electrical & Electronics Engineering + Renewable Energy + Web Development

---

## 📜 License

This project is developed for educational, academic, and portfolio purposes.

---

⭐ If you find this project interesting, feel free to explore the source code and live simulator.
