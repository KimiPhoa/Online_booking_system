# Online Booking System

## Overview

This project is an online booking system for Fresh Cars. It allows customers to browse available cars, book a car, and manage their bookings through a web-based interface. The system is built using React for the frontend and Django for the backend, with SQLite as the database.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Architecture](#architecture)
3. [Setup and Installation](#setup-and-installation)
4. [Usage](#usage)
5. [Potential Improvements](#potential-improvements)

## Technologies Used

### Frontend

- React: A JavaScript library for building user interfaces.
- React Router: For handling routing in the React application.
- Axios: For making HTTP requests to the backend.

### Backend

- Django: A high-level Python web framework that encourages rapid development and clean, pragmatic design.
- Django REST Framework: A powerful and flexible toolkit for building Web APIs.

### Database

- SQLite: A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.

### Containerization

- Docker: A platform for developing, shipping, and running applications.
- Docker Compose: A tool for defining and running multi-container Docker applications.

## Architecture

The application consists of three main components:

1. **Frontend (React)**: 
   - Displays available cars on the home page.
   - Allows users to book a car and manage their bookings.
   - Uses React Router for navigation and Axios for API requests.

2. **Backend (Django)**:
   - Provides RESTful API endpoints for car listings and bookings.
   - Handles business logic and interacts with the SQLite database.

3. **Database (SQLite)**:
   - Stores car details and booking information.

## Setup and Installation

### Prerequisites

- Docker and Docker Compose installed on your machine.

### Steps

1. Clone the repository:

```sh
git clone https://github.com/yourusername/online-booking-system.git
cd online-booking-system
```

2. Build and run the application using Docker Compose:

```sh
docker-compose up --build
```

3. The frontend will be available at http://localhost:3000 and the backend at http://localhost:8000.