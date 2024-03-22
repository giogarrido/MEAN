const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Create an express app
const app = express();

// Connect to the database
connectDB();
app.use(cors());

app.use(express.json());

// Define the routes
app.use('/api/productos', require('./routes/producto'));  // Rutas para productos



// Start the server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
