function sendEmergencyMessage() {
    const message = document.getElementById('message').value;

    // Use the Geolocation API to get the user's location
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };

            // Send the message and location to the server
            sendToEmergencyContacts({ message, location });
        }, error => {
            console.error("Error getting location:", error.message);
            updateStatus("Error getting location.");
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
        updateStatus("Geolocation is not supported by this browser.");
    }
}

function sendToEmergencyContacts(data) {
    // Use fetch or another method to send data to the server
    // Example using fetch and assuming the server is running on localhost:3000
    fetch('http://localhost:3000/sendEmergencyMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Emergency message sent:', data);
        updateStatus("Emergency message sent successfully!");
    })
    .catch((error) => {
        console.error('Error:', error);
        updateStatus("Error sending emergency message.");
    });
}

function updateStatus(message) {
    document.getElementById('status').innerText = message;
}
