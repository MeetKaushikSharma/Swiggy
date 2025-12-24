# 🍔 Swiggy Clone - Complete Project Documentation

A full-stack food delivery application clone built with **React**, **Redux**, and **Tailwind CSS**, featuring Food Delivery, Instamart, and Dineout services with real Swiggy API integration.

**[🚀 Live Demo](https://swiggy-gules.vercel.app/)** | [📁 GitHub](https://github.com/MeetKaushikSharma/Swiggy)

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Tech Stack](#tech-stack)
5. [Prerequisites](#prerequisites)
6. [Installation & Setup](#installation--setup)
7. [CORS Configuration](#cors-configuration)
8. [API Integration Guide](#api-integration-guide)
9. [Running the Application](#running-the-application)
10. [Component Documentation](#component-documentation)
11. [State Management](#state-management)
12. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

This project is a complete replica of the Swiggy food delivery application, featuring three main services:

- **Food Delivery**: Browse and order food from restaurants
- **Instamart**: Quick commerce delivery service
- **Dineout**: Fine dining and restaurant reservations

The application fetches real data from Swiggy's live API endpoints with proper CORS handling to ensure smooth data retrieval from the backend.

---

## ✨ Features

### Food Delivery Module

- 🏪 Browse restaurants by cuisine and location
- 🔍 Search functionality for food items and restaurants
- 📊 Filtering and sorting options
- 🛒 Shopping cart management with Redux
- ✅ Checkout process with order summary
- 🎕 Restaurant menu with detailed item information
- ⏱️ Shimmer loading effects for better UX

### Instamart Module

- 🏬 Quick commerce delivery (10-30 minutes)
- 📦 Multiple product categories:
  - Grocery & Kitchen items
  - Snacks & Drinks
  - Beauty & Wellness
  - Hot Deals

### Dineout Module

- 🍽️ Fine dining restaurant browsing
- 📅 Restaurant information and details
- 🎉 Special dining offers and experiences

### General Features

- 🔴 Responsive design with Tailwind CSS
- 📱 Mobile and desktop compatibility
- ⚡ Fast performance with Parcel bundler
- 🎨 Modern UI/UX with smooth transitions
- 🛂 Redux state management for cart and app state

---

## 📁 Project Structure

```
Swiggy/
├── src/
│   ├── App.js                          # Main app component with routing
│   ├── index.html                      # HTML entry point
│   ├── index.css                       # Global styles
│   │
│   ├── FoodDelivery/                   # Main food delivery module
│   │   ├── Home/
│   │   │   ├── Home.js                 # Home page with featured sections
│   │   │   ├── Header.js               # Navigation header
│   │   │   ├── FoodCard.js             # Food item card component
│   │   │   ├── FoodOption.js           # Food category filter
│   │   │   ├── RestCard.js             # Restaurant card component
│   │   │   ├── DineCard.js             # Dine option card
│   │   │   ├── Grocerycard.js          # Grocery product card
│   │   │   ├── GroceryOption.js        # Grocery category filter
│   │   │   └── Footer.js               # Footer component
│   │   │
│   │   ├── Restaurant/
│   │   │   ├── Restaurant.js           # Restaurant listing page
│   │   │   ├── RestCard.js             # Restaurant card with ratings
│   │   │   └── RestShimmer.js          # Loading skeleton
│   │   │
│   │   ├── Restaurant Menu/
│   │   │   ├── RestaurantMenu.js       # Restaurant menu display
│   │   │   ├── MenuCard.js             # Individual menu item card
│   │   │   ├── RestInfo.js             # Restaurant information section
│   │   │   └── RestMenuShimmer.js      # Menu loading skeleton
│   │   │
│   │   ├── Checkout/
│   │   │   ├── Checkout.js             # Checkout page
│   │   │   ├── CheckoutCard.js         # Cart item in checkout
│   │   │   └── CheckoutHeader.js       # Checkout header
│   │   │
│   │   ├── SearchFood.js               # Food search functionality
│   │   ├── RestHeader.js               # Restaurant page header
│   │   └── SecondaryHome.js            # Layout wrapper for restaurant routes
│   │
│   ├── Instamart/                      # Quick commerce module
│   │   ├── Instamart.js                # Main instamart page
│   │   ├── marthome.js                 # Instamart home layout
│   │   ├── HotDeals.js                 # Hot deals section
│   │   ├── HotDealsCard.js             # Deal card component
│   │   ├── Grocery_and_Kitchen.js      # Grocery category
│   │   ├── Grocery_and_KitchenCard.js  # Grocery item card
│   │   ├── Snacks_and_Drinks.js        # Snacks category
│   │   ├── Snacks_and_DrinksCard.js    # Snack item card
│   │   ├── Beauty_and_Wellness.js      # Beauty category
│   │   ├── Beauty_and_WellnessCard.js  # Beauty item card
│   │   └── Instamart_Footer.js         # Instamart footer
│   │
│   ├── Dineout/                        # Fine dining module
│   │   ├── Dineout.js                  # Main dineout page
│   │   ├── DineHeader.js               # Dineout header
│   │   ├── DineCard.js                 # Dine restaurant card
│   │   ├── DineOption.js               # Dine category filter
│   │   └── Dineout_Footer.js           # Dineout footer
│   │
│   ├── Stored/                         # Redux state management
│   │   ├── stores.js                   # Redux store configuration
│   │   └── CartSlicer.js               # Cart state slice
│   │
│   └── Utils/                          # Utility files and data
│       ├── FoodData.js                 # Food categories and banners
│       ├── DineData.js                 # Dineout data and filters
│       └── Grocery.js                  # Grocery product data
│
├── package.json                        # Project dependencies
├── .parcel-cache/                      # Parcel bundler cache
└── .gitignore                          # Git ignore rules
```

---

## 🛠 Tech Stack

| Category             | Technologies                            |
| -------------------- | --------------------------------------- |
| **Frontend**         | React 19.2.1                            |
| **Routing**          | React Router DOM 6.30.2                 |
| **State Management** | Redux Toolkit 2.11.1, React Redux 9.2.0 |
| **Styling**          | Tailwind CSS 4.1.17                     |
| **Build Tool**       | Parcel 2.16.3                           |
| **HTTP Client**      | Fetch API (Vanilla JavaScript)          |
| **Node Version**     | 16+ recommended                         |
| **Package Manager**  | npm or yarn                             |

---

## 📦 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of React and Redux

### Verify Installation

```bash
node --version      # v16.0.0 or higher
npm --version       # 8.0.0 or higher
```

---

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/MeetKaushikSharma/Swiggy.git

# Or using SSH
git clone git@github.com:MeetKaushikSharma/Swiggy.git

# Navigate to project directory
cd Swiggy
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### Step 3: Verify Installation

```bash
npm list

# Expected output showing:
# ├── @reduxjs/toolkit@2.11.1
# ├── react@19.2.1
# ├── react-dom@19.2.1
# ├── react-redux@9.2.0
# ├── react-router-dom@6.30.2
# └── (dev dependencies)
```

---

## 🔒 CORS Configuration

### What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a security mechanism that controls how web pages from one domain can access resources from another domain. When your frontend (running on `localhost:1234`) tries to fetch data from Swiggy's API (different domain), CORS rules apply.

### Why CORS is Needed

Swiggy's API requires proper CORS headers and configuration:

- Domain validation
- Method restrictions (GET, POST, etc.)
- Header validation
- Credential handling

### CORS Configuration in This Project

#### Frontend CORS Setup

**File**: All API calls use the following configuration:

```javascript
// Standard CORS-enabled fetch configuration
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  // User-Agent header to mimic browser requests
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
};

// For credentials (cookies, authorization)
const options = {
  method: "GET",
  headers: headers,
  // Include credentials if needed for authenticated requests
  credentials: "include",
};

fetch(apiUrl, options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("CORS Error:", error));
```

#### Common CORS Issues & Solutions

| Issue                                       | Cause                         | Solution                        |
| ------------------------------------------- | ----------------------------- | ------------------------------- |
| **No 'Access-Control-Allow-Origin' header** | API doesn't allow your domain | Use CORS proxy or backend proxy |
| **Preflight request fails**                 | OPTIONS method not allowed    | Configure OPTIONS handling      |
| **Credentials blocked**                     | Cookie issues with CORS       | Set proper credential headers   |
| **CORS policy error in console**            | Missing CORS headers from API | Implement proxy server          |

#### CORS Proxy Solution

If Swiggy's API doesn't allow direct browser requests, use a CORS proxy:

```javascript
// Original API endpoint
const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5";

// Using CORS proxy (example)
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const proxiedUrl = CORS_PROXY + SWIGGY_API;

fetch(proxiedUrl, {
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0",
  },
})
  .then((res) => res.json())
  .catch((err) => console.log("CORS Proxy Error:", err));
```

#### Backend Proxy Server (Recommended)

Create a Node.js backend server to handle CORS:

**Create `backend/server.js`:**

```javascript
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = 5000;

// CORS configuration
const corsOptions = {
  origin: "http://localhost:1234", // Your frontend URL
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

// Proxy endpoint for Swiggy API
app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
```

**Install backend dependencies:**

```bash
cd backend
npm install express cors node-fetch
```

**Update frontend to use proxy:**

```javascript
// Instead of direct API call
// const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5');

// Use your backend proxy
const response = await fetch("http://localhost:5000/api/restaurants");
```

---

## 🌐 API Integration Guide

### Swiggy API Endpoints

#### 1. **Get Restaurants List**

```javascript
// Endpoint
const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5";

// Query Parameters
const params = {
  lat: 28.7041, // Latitude (Delhi example)
  lng: 77.1025, // Longitude
  offset: 0, // Pagination offset
  sortBy: "relevance", // Sort criteria
  pageSize: 20, // Items per page
};

// Fetch function
async function getRestaurants(lat, lng, offset = 0) {
  try {
    const queryString = new URLSearchParams({
      lat,
      lng,
      offset,
      sortBy: "relevance",
      pageSize: 20,
    }).toString();

    const response = await fetch(`${API_URL}?${queryString}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept: "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
}

// Usage
getRestaurants(28.7041, 77.1025, 0)
  .then((data) => console.log("Restaurants:", data))
  .catch((err) => console.error("Failed to fetch:", err));
```

#### 2. **Get Restaurant Menu**

```javascript
const MENU_API = "https://www.swiggy.com/dapi/menu/pl";

async function getRestaurantMenu(restaurantId) {
  try {
    const response = await fetch(
      `${MENU_API}?page-type=REGULAR_MENU&complete-menu=true&lat=28.7041&lng=77.1025&restaurantId=${restaurantId}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Accept: "application/json",
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
}

// Usage
getRestaurantMenu("12345").then((menu) => console.log("Menu:", menu));
```

#### 3. **Search Restaurants**

```javascript
const SEARCH_API = "https://www.swiggy.com/dapi/restaurants/search/v3";

async function searchRestaurants(query, lat, lng) {
  try {
    const response = await fetch(
      `${SEARCH_API}?query=${query}&lat=${lat}&lng=${lng}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Accept: "application/json",
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Search failed:", error);
  }
}

// Usage
searchRestaurants("pizza", 28.7041, 77.1025).then((results) =>
  console.log("Results:", results)
);
```

### Response Data Structure

```javascript
{
  "statusCode": 0,
  "data": {
    "success": true,
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "12345",
              "name": "Restaurant Name",
              "cloudinaryImageId": "image_id",
              "cuisines": ["North Indian", "Chinese"],
              "avgRating": 4.5,
              "deliveryTime": 30,
              "costForTwo": 500,
              "sla": {
                "deliveryTime": 30,
                "lastMileDistance": 5.5
              }
            }
          }
        }
      }
    ]
  }
}
```

### Error Handling

```javascript
async function fetchWithErrorHandling(url, options = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    // Check if response is ok
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.statusCode !== 0) {
      throw new Error(data.message || "API Error");
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Network Error:", error.message);
      // CORS error or network failure
      throw new Error("Network request failed. Check CORS configuration.");
    } else {
      console.error("API Error:", error.message);
      throw error;
    }
  }
}
```

### Rate Limiting Considerations

```javascript
// Simple rate limiter
class APIRateLimiter {
  constructor(maxRequests = 10, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = [];
  }

  async execute(fn) {
    const now = Date.now();

    // Remove old requests outside window
    this.requests = this.requests.filter((time) => now - time < this.windowMs);

    if (this.requests.length >= this.maxRequests) {
      const waitTime = this.windowMs - (now - this.requests[0]);
      console.warn(`Rate limit exceeded. Wait ${waitTime}ms`);
      await new Promise((resolve) => setTimeout(resolve, waitTime));
      return this.execute(fn);
    }

    this.requests.push(now);
    return fn();
  }
}

// Usage
const limiter = new APIRateLimiter(10, 60000); // 10 requests per minute

limiter
  .execute(() => getRestaurants(lat, lng))
  .then((data) => console.log(data));
```

---

## ▶️ Running the Application

### Development Mode

```bash
# Start the development server
npm run dev

# Or start with Parcel directly
npx parcel src/index.html

# The app will be available at:
# http://localhost:1234 (or another port if 1234 is busy)
```

### Production Build

```bash
# Create optimized production build
npm run build

# Output will be in the `dist/` folder
```

### View in Browser

1. Open your browser
2. Navigate to `http://localhost:1234`
3. You should see the Swiggy homepage

---

## 📦 Component Documentation

### Home Component (`src/FoodDelivery/Home/Home.js`)

**Purpose**: Main landing page with featured restaurants and cuisines

**Key Features**:

- Banner carousel
- Cuisine categories
- Top-rated restaurants
- Grocery and Dineout promotions

**State Management**:

```javascript
- restaurants: Array of restaurant objects
- loading: Boolean for shimmer effect
- error: Error state
```

### Restaurant Component (`src/FoodDelivery/Restaurant/Restaurant.js`)

**Purpose**: Display filtered restaurant listings

**Filters Available**:

- Cuisine type
- Rating
- Delivery time
- Cost range

### RestaurantMenu Component (`src/FoodDelivery/Restaurant Menu/RestaurantMenu.js`)

**Purpose**: Show complete menu for selected restaurant

**Features**:

- Food categories
- Menu items with prices
- Add to cart functionality
- Item customization options

### Checkout Component (`src/FoodDelivery/Checkout/Checkout.js`)

**Purpose**: Cart review and order placement

**Features**:

- Cart items display
- Quantity adjustment
- Price calculation
- Order summary

### Redux Store (`src/Stored/stores.js`)

```javascript
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlicer";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
```

### Cart Slice (`src/Stored/CartSlicer.js`)

```javascript
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```

---

## 🎛️ State Management

### Redux Setup

The application uses Redux for global state management:

```javascript
// Accessing Redux state in components
import { useSelector, useDispatch } from "react-redux";

function MyComponent() {
  // Read from store
  const cartItems = useSelector((state) => state.cart.items);

  // Dispatch actions
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <h2>Cart Items: {cartItems.length}</h2>
      <button onClick={() => handleAddItem(newItem)}>Add Item</button>
    </div>
  );
}
```

### Store Structure

```
Store
└── cart (CartSlicer)
    ├── items: MenuItem[]
    ├── totalPrice: number
    └── Reducers:
        ├── addItem(state, action)
        ├── removeItem(state, action)
        └── clearCart(state)
```

---

## 🧹 Troubleshooting

### Problem: CORS Error When Fetching Data

**Error Message**:

```
Access to XMLHttpRequest at 'https://www.swiggy.com/...' from origin 'http://localhost:1234'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

**Solutions**:

1. **Use CORS Proxy**: Add a CORS proxy URL before the API endpoint
2. **Backend Proxy Server**: Create a Node.js server to proxy requests
3. **Browser Extension**: Install CORS extension for development only
4. **Check API Headers**: Ensure proper headers are sent

```javascript
// Debug CORS issues
fetch(url, {
  headers: {
    "User-Agent": "Mozilla/5.0",
    Accept: "application/json",
  },
})
  .then((res) => {
    console.log("Response Headers:", res.headers);
    return res.json();
  })
  .catch((err) => console.error("Full Error:", err));
```

### Problem: No Data Displayed

**Checklist**:

- ✅ Check if API endpoint is correct
- ✅ Verify internet connection
- ✅ Check browser console for errors
- ✅ Verify latitude/longitude parameters
- ✅ Check Redux DevTools for state updates
- ✅ Ensure shimmer/loading state is working

### Problem: Port 1234 Already in Use

```bash
# Kill process using port 1234 (Windows)
netstat -ano | findstr :1234
taskkill /PID <PID> /F

# Or use different port with Parcel
npx parcel src/index.html --port 3000
```

### Problem: Dependencies Installation Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Problem: Hot Module Replacement Not Working

```bash
# Restart development server
npm run dev

# Clear Parcel cache
rm -rf .parcel-cache
npm run dev
```

---

## 📚 Additional Resources

- **React Documentation**: https://react.dev
- **Redux Toolkit Guide**: https://redux-toolkit.js.org
- **React Router**: https://reactrouter.com
- **Tailwind CSS**: https://tailwindcss.com
- **Parcel Bundler**: https://parceljs.org
- **MDN CORS Guide**: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Kaushik Sharma**

- GitHub: [@MeetKaushikSharma](https://github.com/MeetKaushikSharma)

---

## 🔗 Quick Links

- [Live Demo](https://swiggy-gules.vercel.app/)
- [Issue Tracker](https://github.com/MeetKaushikSharma/Swiggy/issues)
- [Project Board](https://github.com/MeetKaushikSharma/Swiggy/projects)

---

**Last Updated**: December 24, 2025  
**Version**: 1.0.0

---

## ❓ FAQ

**Q: Can I use this for commercial purposes?**
A: This is a learning project. Respect Swiggy's terms of service and intellectual property rights.

**Q: How do I update the location/coordinates?**
A: Update the `lat` and `lng` parameters in API calls to your desired location.

**Q: Is my API key required?**
A: Swiggy's public API doesn't require API keys, but implement proper error handling and rate limiting.

**Q: How do I deploy this to production?**
A: Build with `npm run build` and deploy the `dist/` folder to services like Vercel, Netlify, or GitHub Pages.

---

**Happy Coding! 🚀**
