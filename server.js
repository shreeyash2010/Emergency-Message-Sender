const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/sendEmergencyMessage', (req, res) => {
    const message = req.body.message;
    const location = req.body.location;

    // Here, you can implement logic to notify emergency contacts,
    // store the message and location in a database, or perform other actions.

    console.log('Emergency message received:', message);
    console.log('Location:', location);

    res.json({ status: 'Emergency message received successfully' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
