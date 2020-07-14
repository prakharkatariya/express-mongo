const mongoose = require('mongoose');
const assert = require('assert');
const db_url = process.env.DB_URL;

// connection code
mongoose.connect(
    db_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (error, link) => {
        assert.equal(error, null, 'DB connection failed');
        console.log('DB connection successful');
        console.log(link);
    }
)