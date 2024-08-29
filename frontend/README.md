# Shopping Cart Web Application

## Overview

This project is a fundamental shopping cart web application built using ReactJS for the frontend and NodeJS for the backend. The application features a product list, a category menu, and a search bar, all styled to be attractive and user-friendly.

## Features

- **Product List:** Displays a list of products with images and details.
- **Category Menu:** Allows users to filter products by category.
- **Search Bar:** Enables users to search for products by name.
- **Responsive Design:** Adjusts layout for various screen sizes.

## Technologies Used

- **Frontend:** ReactJS
- **Backend:** NodeJS (Express)
- **Styling:** CSS


## Backend Setup

### Dependencies

- Express

### Endpoints

1. **GET /products**
   - Returns a list of products.

2. **GET /categories**
   - Returns a list of product categories.

### Running the Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Start the server: `node index.js`
4. The server will run on `http://localhost:5000`

## Frontend Setup

### Dependencies

- React
- Axios

### Running the Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. The application will run on `http://localhost:3000`

## API Integration

The frontend makes HTTP requests to the backend endpoints to fetch products and categories.

### Example Requests

- **Get Products**

  GET http://localhost:5000/products

- **Get Categories**

  GET http://localhost:5000/categories

## Styling

The application uses CSS for styling. Customize the styles.css file in the frontend/src directory to adjust the design.
