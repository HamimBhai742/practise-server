# Practise Server

A Node.js REST API server built with Express and MongoDB for managing users and products.

## Tech Stack

- **Node.js** - Runtime environment
- **Express 5.1.0** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **ES6 Modules** - Modern JavaScript syntax

## Project Structure

```
src/
├── app.js              # Express app configuration
├── server.js           # Server entry point
├── routes/
│   └── router.js       # Main router
├── models/
│   ├── users/          # User module
│   └── products/       # Product module
└── utils/              # Utility functions
```

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Scripts

```bash
npm start     # Start production server
npm run dev   # Start development server with nodemon
```

## API Endpoints

### Base URL: `/api/v1`

### Users
- `GET /api/v1/users` - Get all users
- `POST /api/v1/users` - Create user
- `GET /api/v1/users/:id` - Get user by ID
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

### Products
- `GET /api/v1/products` - Get all products
- `POST /api/v1/products` - Create product
- `GET /api/v1/products/:id` - Get product by ID
- `PUT /api/v1/products/:id` - Update product
- `DELETE /api/v1/products/:id` - Delete product

## Models

### User
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required),
  role: String (user/admin, default: user),
  status: String (active/inactive, default: active),
  age: Number (18-100),
  address: String,
  phone: String,
  image: String
}
```

### Product
```javascript
{
  name: String (required),
  price: Number (required),
  description: String,
  category: String (Furniture/Electronics/Clothing/Books/Toys/Fashion/Sports/Health),
  stock: Number (default: 0)
}
```

## Development

The server runs on `http://localhost:5000` by default.

## Dependencies

- express: ^5.1.0
- mongoose: ^8.19.3
- mongodb: ^7.0.0
- dotenv: ^17.2.3
- http-status-codes: ^2.3.0
- nodemon: ^3.1.10 (dev)
