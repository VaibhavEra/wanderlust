# Wanderlust 🌍✈️

## Project Overview

Wanderlust is a full-stack web application designed to help travelers discover and book unique accommodations worldwide. Inspired by platforms like Airbnb, Wanderlust provides a comprehensive experience for users to browse, create, and manage property listings.

## Live Demo

Experience Wanderlust live: [https://wanderlust-n64t.onrender.com/](https://wanderlust-n64t.onrender.com/)

## Features

### User Authentication & Management

- 🔐 User registration and login functionality
- 👤 User profiles with personal information
- 🔒 Secure authentication using Passport.js

### Property Listings

- 🏠 Browse all available accommodations
- 📝 View detailed information for individual properties
- 🔍 Property listings with images and descriptions
- 📌 Geographic location information

### User Interaction

- ➕ Create new property listings
- ✏️ Edit existing property details (owner-only)
- 🗑️ Delete property listings (owner-only)
- 💬 Add and view reviews for properties
- ⭐ Rating system for properties

### User Experience

- 📱 Responsive design for all devices
- 🔔 Flash notifications for user actions
- 🔄 Session management for persistent login

## Tech Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Passport.js** - Authentication middleware
- **Express Session** - Session management
- **Connect Flash** - Flash messages

### Frontend

- **EJS** - Templating engine
- **EJS Mate** - Layout templating
- **CSS3** - Styling
- **Bootstrap** - Responsive design

### Deployment

- **Render** - Application hosting
- **MongoDB Atlas** - Cloud database

## Installation & Setup

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (local or Atlas connection)

### Installation Steps

1. Clone the repository

```bash
git clone https://github.com/YourUsername/wanderlust.git
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
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_session_secret_key
   ```

4. Start the application

```bash
npm start
```

5. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
wanderlust/
│
├── models/          # Mongoose models (listings, users, reviews)
├── views/           # EJS templates
│   ├── layouts/     # EJS Mate layout templates
│   ├── listings/    # Property listing views
│   └── users/       # User authentication views
├── public/          # Static assets
│   ├── css/         # Stylesheets
│   ├── js/          # Client-side JavaScript
│   └── images/      # Image assets
├── controllers/     # Route controllers
├── routes/          # Express route definitions
├── utils/           # Utility functions and middleware
└── app.js           # Main application file
```

## Key Dependencies

```json
{
  "connect-flash": "^0.1.1",
  "connect-mongo": "^4.6.0",
  "dotenv": "^16.0.3",
  "ejs": "^3.1.8",
  "ejs-mate": "^4.0.0",
  "express": "^4.18.2",
  "express-session": "^1.17.3",
  "method-override": "^3.0.0",
  "mongoose": "^6.8.4",
  "passport": "^0.6.0",
  "passport-local": "^1.0.0",
  "passport-local-mongoose": "^7.1.2"
}
```

## Contributing

Contributions are welcome! If you'd like to contribute to Wanderlust, please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- 🔍 Advanced search and filtering options
- 📊 User dashboard with booking history
- 💲 Payment processing integration
- 📱 Mobile app version
- 🗺️ Interactive maps for property locations
- 📅 Availability calendar and booking system

---

**Happy Traveling! 🌎🧳**
