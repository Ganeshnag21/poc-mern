const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

  
app.use(cors({
    origin: 'http://localhost:3000', // Allow only frontend origin
    methods: ['GET', 'POST'], // Allow specific HTTP methods
    credentials: true // Allow cookies if needed
}));
app.get('/express/', (request, response) => {
    response.send(`
        <h1>Status Code: ${response.statusCode}</h1>
        <h2>Hello World123</h2>
    `)
});

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
})