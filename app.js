// functions
const express = require('express');
// connection to db
const mongoose = require('mongoose');
// connection to config file
const config = require('config');

// initialization
const app = express();

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'));

// get port from config
const PORT = config.get('port') || 5000;

// connect to db
const start = async () => {
    try {
        // connect to db
        await mongoose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true, 
            useUnifiedTopology: true
            // useCreateindex: true
        });
        app.listen(PORT, () => console.log(`App is started on port ${PORT}`));
    }
    catch (error) {
        console.log('Server error ', error.message);
        // end process
        process.exit(1);
    }
}

// run app 
start();
