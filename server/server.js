const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const moduleRoutes = require('./routes/modules');
const forumRoutes = require('./routes/forum');
const newsRoutes = require('./routes/news');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/news', newsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(Server running on port );
});
