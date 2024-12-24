# Furniro Store Documentation

## Overview

**Furniro Store** is a fully responsive e-commerce website that allows users to browse, search, and purchase home and daily essentials. The platform also includes features for users to add products to their favorites list and place orders. The website is built with the latest web technologies and designed to provide a seamless user experience across all devices.

The project leverages **Strapi** as the headless CMS for managing and delivering content and data, making it easy to manage products and other dynamic content. The frontend is built with **Next.js** (a React framework) and styled with **Tailwind CSS** for rapid UI development. The application is developed using **TypeScript** to minimize errors and enhance code quality and maintainability.

## Key Features

- **Product Selection**: Users can browse and choose from a wide range of home and daily essentials.
- **Search**: A robust search functionality allows users to easily find products based on different criteria.
- **Favorites List**: Users can add products to their favorite list for future reference.
- **Responsive Design**: The website is fully responsive, ensuring it works seamlessly across desktops, tablets, and mobile devices.
- **Strapi Backend**: The backend is powered by **Strapi**, a headless CMS, enabling dynamic content management.
- **Error Minimization**: TypeScript is used for the frontend development to ensure fewer runtime errors and better development experience.
- **E-commerce Features**: The platform supports user registration, order placement, and more.

## Tech Stack

- **Frontend**:

  - **Next.js**: A React framework for building modern web applications with server-side rendering (SSR).
  - **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
  - **TypeScript**: A superset of JavaScript that provides static typing and error checking during development.
  - **React Query**: A library for fetching, caching, and synchronizing remote data in React.
  - **Redux Toolkit**: A state management library for efficient data flow in the application.
  - **Axios**: A promise-based HTTP client for making API requests.

- **Backend**:

  - **Strapi**: A headless CMS used for managing products, categories, and other dynamic content.

- **Other Libraries**:

  - **React Hook Form**: A library for handling form validation and state in React.
  - **React Toastify**: A library for displaying notifications (e.g., success, error messages).

## Project Structure

The project structure follows best practices for a scalable and maintainable Next.js application. Here’s a breakdown of the important parts:

- **`components/`**: Contains reusable UI components like buttons, product cards, headers, footers, etc.
- **`services/`**: Contains functions for interacting with external services, such as making API requests to the Strapi backend.
- **`store/`**: Contains Redux slices and state management logic using Redux Toolkit.

## Installation

To set up the project locally, follow the steps below:

1. Clone the repository:

   git clone https://github.com/your-username/furniro-store.git
   cd furniro-store

2. Install dependencies:

   npm install

3. Start the development server:

   npm run dev

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

### Adding Products to Cart

Users can select products and add them to their cart. The cart data is managed through Redux and is accessible from any page in the application. Once products are added to the cart, users can proceed to checkout.

### Search Functionality

The search feature allows users to search for products by name, category, or other attributes. The results are dynamically fetched and displayed as the user types in the search bar.

### Favorites

Users can add products to their favorites list, which can be accessed from the user's profile page. This allows users to easily access products they are interested in purchasing later.

### Responsive Design

The application is designed to be fully responsive, ensuring a smooth experience across various devices, from desktops to mobile phones.

## Backend (Strapi)

The backend is powered by **Strapi**, which serves as the content management system (CMS) for managing products, categories, and other dynamic content. Strapi exposes RESTful APIs to the frontend, making it easy to fetch and display data.

### Setting Up Strapi

To set up Strapi locally:

1. Clone the Strapi repository:

   git clone https://github.com/strapi/strapi.git
   cd strapi

2. Install dependencies:

   npm install

3. Start the Strapi server:

   npm run develop

4. The Strapi admin panel will be available at `http://localhost:1337/admin`, where you can manage products and other content.

## Contribution

We welcome contributions to improve the project. Feel free to open an issue or submit a pull request.
