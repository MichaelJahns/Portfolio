'use strict';

// Load Express (Like a Script tag to load the express lib)
const express = require('express');

//Instantiate Express
const app = express();

// Designate a port with which to serve our app
const PORT = process.env.PORT || 3000;

//Define from which directory we will serve our files
app.use(express.static('./public'));

    // // Create Route for bat country
    // app.get('/bats', (req, res) => {
    //   console.log('The bats route has been hit!');
    //   res.status(200).sendFile('public/bat-country.html', {root: '.'});
    // })

// Tell the app to listen so that it can do its thing
app.listen(PORT, () => console.log(`Our app is listening on PORT ${PORT}`));
