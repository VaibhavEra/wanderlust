# Wanderlust 🌍✈️

## Project Overview

Wanderlust is a web application that helps users discover and book unique travel accommodations. Inspired by popular rental platforms, this project provides a streamlined experience for browsing, creating, and managing property listings.

## Features

### Current Functionality

- 🏠 View all property listings
- 📝 Detailed view for individual properties
- ➕ Create new property listings
- ✏️ Edit existing property details
- 🗑️ Delete property listings

### Upcoming Features

- 🔐 User authentication
- 💬 Review and rating system
- 🗺️ Advanced search and filtering
- 📅 Booking functionality

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend

- EJS (Templating Engine)
- EJS Mate (Layout Templating)
- CSS3

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0 or later)

## Installation

1. Clone the repository

```bash
git clone https://github.com/VaibhavEra/wanderlust.git
cd wanderlust
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

- Create a `.env` file in the root directory
- Add the following variables:
  ```
  MONGODB_URI=your_mongodb_connection_string
  PORT=3000
  ```

4. Seed initial data (optional)

```bash
npm run seed
```

5. Start the application

```bash
npm start
```

6. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
wanderlust/
│
├── models/          # Mongoose models
├── views/           # EJS templates
│   └── layouts/     # EJS Mate layout templates
├── public/          # Static assets
│   └── css/         # Stylesheets
├── controllers/     # Route logic
├── routes/          # Express route definitions
└── seeds/           # Database seed scripts
```

---

**Happy Traveling! 🌎🧳**
