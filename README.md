# ShowCase Gallery — MERN Stack Application

A full-stack product gallery management application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to view, add, edit, and delete products through a responsive web interface, with data stored persistently in MongoDB Atlas.

## Live Deployment

- **Live Website (Vercel):** https://showcase-gallery-wheat.vercel.app
- **Backend API (Render):** https://showcase-api-junnigelrivera.onrender.com
- **Products API:** https://showcase-api-junnigelrivera.onrender.com/api/products
- **GitHub Repository:** https://github.com/jiwchuu/showcase-gallery

## Features

- **Product Gallery:** Display saved products with their images and details.
- **Add Products:** Create new product entries through the management interface.
- **Edit Products:** Update existing product information.
- **Delete Products:** Remove products from the database.
- **Data Persistence:** Store and retrieve products using MongoDB Atlas.
- **Responsive Interface:** Access the application through desktop and mobile browsers.
- **REST API Integration:** Connect the React frontend to an Express.js backend.

## Technologies Used

|------------------------------------------------------|
| Technology    | Purpose                              |
|---------------|--------------------------------------|
| React.js      | Frontend development                 |
| Vite          | Frontend development and build tool  |
| Tailwind CSS  | User interface styling               |
| Node.js       | Backend runtime environment          |
| Express.js    | REST API                             |
| MongoDB Atlas | Cloud database                       |
| Mongoose      | MongoDB data modeling                |
|------------------------------------------------------|

## Project Structure

    showcase/
    ├── Client/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── pages/
    │   │   ├── api.js
    │   │   └── App.jsx
    │   └── .env.example
    ├── server/
    │   ├── server.js
    │   └── .env.example
    ├── .gitignore
    └── README.md

## Installation and Local Setup
### 1. Clone the Repository

    git clone https://github.com/jiwchuu/showcase-gallery.git
    cd showcase-gallery

### 2. Set Up the Backend
Navigate to the server directory:

    cd server

Install dependencies:

    npm install

Create a `.env` file inside the `server` directory and configure the following:

    MONGO_URI=your_mongodb_atlas_connection_string
    PORT=5000

Start the backend:

    npm start

### 3. Set Up the Frontend
Open another terminal from the project root and navigate to the frontend directory:

    cd Client

Install dependencies:

    npm install

Create a `.env` file inside the `Client` directory:

    VITE_API_URL=https://showcase-api-junnigelrivera.onrender.com

Start the development server:

    npm run dev

Open the localhost URL displayed in the terminal.

## API Endpoints
The backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Retrieve all products |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update an existing product |
| DELETE | `/api/products/:id` | Delete an existing product |

**API Base URL:** https://showcase-api-junnigelrivera.onrender.com

## Deployment
### Frontend — Vercel
The React frontend is deployed on Vercel.
It communicates with the backend API using the `VITE_API_URL` environment variable.

**Live Website:** https://showcase-gallery-wheat.vercel.app/

### Backend — Render
The Node.js and Express.js backend is deployed on Render.
The backend connects to MongoDB Atlas using the `MONGO_URI` environment variable.

**Backend API:** https://showcase-api-junnigelrivera.onrender.com

### Database — MongoDB Atlas
MongoDB Atlas serves as the cloud database for storing product records.

This ensures that product information remains saved even after refreshing or reopening the application.

## CRUD Functionality Testing
The following functionalities were successfully tested on the live website:

- [x] Display products in the gallery.
- [x] Add new products.
- [x] Edit existing products.
- [x] Delete products.
- [x] Retain saved data after refreshing the page.
- [x] Connect the frontend to the deployed backend API.
- [x] Access the application through the live Vercel website.

## Developer
**Jun Nigel Rivera**
**Course:** INF238
Developed as a MERN Stack project activity demonstrating full-stack web development, REST API integration, cloud database connectivity, and website deployment.