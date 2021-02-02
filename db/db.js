const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/profileDB', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('connected', () => console.log('DB connected successfully'))
db.on('error', () => console.log('Failed to connect DB'));