require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const database = require('./database');
const userController = require('./controllers/user');

// middleware setup
app.use(morgan('dev'));
app.use(cors());
app.use('/api/user', userController);

// default routes
app.all(
    '/',
    (req, res) => {
        return res.json({
            status: true,
            message: 'Index page is working'
        });
    }
)

app.listen(
    port,
    () => {
        console.log('server running at port : ' + port);
    }
)