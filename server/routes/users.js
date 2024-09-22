# Anti-Doping App Client

This is the client-side of the Anti-Doping App.

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository
2. Navigate to the client directory
3. Run 
pm install

### Running the App
1. Run 
pm start
2. Open your browser and navigate to http://localhost:8080
"@ | Out-File -FilePath "client\README.md" -Force

# server/routes/users.js
@"
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User routes
router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
