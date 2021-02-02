const express = require('express');
const config = require('config');
const routes = require('./routes');
const db = require('./db/db');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use('/uploads', express.static('my-uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', routes);

const PORT = config.get('PORT');
app.listen(PORT, () => console.log(`Server is listening port ${PORT}`));