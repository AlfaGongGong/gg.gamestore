# Game Store Web Application

Welcome to the Game Store web application! This project allows users to browse and purchase PC games. It consists of both frontend (built with React) and backend (built with Node.js and Express.js).

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Frontend](#frontend)
  - [Folder Structure](#folder-structure)
  - [Running the Frontend](#running-the-frontend)
- [Backend](#backend)
  - [Folder Structure](#folder-structure-backend)
  - [Running the Backend](#running-the-backend)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (v14 or higher)
- MySQL (local server running on port 8080)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/game-store.git
   ```

2. Navigate to the project directory:

   ```bash
   cd game-store
   ```

3. Install frontend and backend dependencies:

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

## Frontend

### Folder Structure

The frontend directory structure is as follows:

- `public/`: Contains the HTML entry point (`index.html`) and other static assets.
- `src/`:
  - `assets/`: Images, icons, and other static resources.
  - `components/`: Reusable UI components.
  - `pages/`: Page-specific components.
  - `services/`: Communication with the backend.
  - `utils/`: Helper functions.
  - `App.js`: Main application component.
  - `index.js`: Entry point.

### Running the Frontend

To start the frontend development server:

```bash
cd frontend
npm start
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Backend

### Folder Structure

The backend directory structure is as follows:

- `src/`:
  - `controllers/`: Request handling logic.
  - `models/`: Database schemas.
  - `routes/`: API route definitions.
  - `services/`: Business logic.
  - `utils/`: Helper functions.
  - `app.js`: Main server logic.

### Running the Backend

To start the backend server:

```bash
cd backend
npm start
```

The server will run on [http://localhost:5000](http://localhost:5000).

## API Documentation

- **Authentication**:
  - Register: `POST /api/auth/register`
  - Login: `POST /api/auth/login`
  - Verify Token: `GET /api/auth/verify`

- **Game Data**:
  - Get Games: `GET /api/games`
  - Get Game Details: `GET /api/games/:id`

## Contributing

Contributions are welcome! Please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
