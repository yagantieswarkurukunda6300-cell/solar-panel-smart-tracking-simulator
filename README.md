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

- Simulate a solar tracking system using software.
- Understand solar panel orientation and tracking.
- Demonstrate basic control-system logic.
- Calculate an estimated power output based on panel alignment.
- Compare fixed-panel and tracking-panel power.
- Visualize power variation using a live graph.
- Connect EEE concepts with modern web development.

---

## ☀️ Solar Tracking Concept

Solar tracking is a technique used to change the orientation of a solar panel according to the position of the Sun.

### Single-Axis Tracking

A single-axis tracker rotates the panel around one axis.

### Dual-Axis Tracking

A dual-axis tracker can adjust the panel in two directions:

- Horizontal movement
- Vertical movement

This project currently demonstrates the tracking concept through a software-based single-axis simulation.

---

## ⚙️ How the Simulator Works

### 1. Sun Position

The user changes the Sun position using the slider.

### 2. Tracking Angle

The simulator calculates the required panel angle.

```text
Tracking Angle = Sun Position - 50