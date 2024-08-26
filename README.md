# Mechanical Keyboard Shop

## Overview

Mechanical Keyboard Shop is a comprehensive e-commerce website exclusively for mechanical keyboards, built using React, Redux, Mongoose, and Express. This project offers easy product browsing, detailed product pages, a smooth cart system, and robust tools for product management. It includes advanced features like fast search, page refresh warnings, filtering, and optional integration with Stripe for secure payments. The website aims to create a modern and user-friendly online store for mechanical keyboard enthusiasts.

## Live Demo
Check out the live version of the site here: [Mechanical Keyboard Shop](https://mechkeys-client.vercel.app/)

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Core Pages and Functionalities](#core-pages-and-functionalities)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design optimized for all devices.
- Easy product browsing with search and filtering options.
- Detailed product pages with product information, rating, and description.
- Smooth cart system with quantity management and real-time pricing updates.
- Checkout with user details collection and multiple payment methods.
- Admin dashboard for product management with add, update, and delete functionalities.
- Integration with Stripe for secure payments.
- Attractive and informative pages like About Us and Contact Us.

## Technology Stack

- **Frontend**: React with Vite, TypeScript, Redux, RTK Query, Tailwind CSS
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **Other Tools and Libraries**:
  - `react-hook-form`, `zod` for form validation
  - `styled-components` for styled UI components
  - `framer-motion` for animations
  - `swiper` for carousel components
  - `sweetalert2` for alert dialogs
  - `ImgBB` for image upload

## Core Pages and Functionalities

### 1. Homepage / Landing Page
- **Navbar**: Logo, navigation links, and cart icon with item count.
- **Hero Section**: Visually appealing section showcasing the brand.
- **Service Advertisement**: Advertise benefits and services.
- **Featured Products**: Display 6 latest products with details and navigation to the Product Details page.
- **Top Featured Brands**: Display popular keyboard brands.
- **Customer Reviews**: Display testimonials in a carousel.
- **Extra Sections**: Information on mechanical keyboards and customizable options.
- **Footer**: Contact information and social media links.

### 2. Products Page
- Display all products in card view with image, name, brand, price, and rating.
- Search bar and filtering options for easy product discovery.
- Sorting options and a clear filter button.

### 3. Product Details Page
- Display product information with an "Add to Cart" button.
- Quantity management and out-of-stock handling.

### 4. Cart Page
- List all added products with quantity controls and remove option.
- Real-time pricing updates and a "Proceed to Checkout" button.

### 5. Checkout Page
- Collect user details like name, email, phone number, and address.
- Provide payment options including Cash on Delivery and Stripe.
- Deduct quantities from product stock upon successful order placement.

### 6. Product Management/Dashboard Page
- Display products in a table with update and delete options.
- Add new products using a form with image upload.
- Real-time UI updates with optimistic updates.

### 7. About Us Page
- An attractive page with basic animations and gradients.

### 8. Contact Us Page
- Detailed contact information and a form to encourage feedback.

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your machine.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/sattamap/mechkeys-client.git
    
    cd mechkeys-client
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Build the project for production:
    ```bash
    npm run build
    ```

5. Preview the production build:
    ```bash
    npm run preview
    ```
