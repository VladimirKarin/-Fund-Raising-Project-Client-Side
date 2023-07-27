const axios = require('axios');
const URL = 'https://fund-raising-project-server-side.azurewebsites.net/ideas';
// URL of the server's endpoint that provides ideas data

// Use Axios to fetch data from the server
axios
    .get(URL)
    .then((response) => {
        // The server responded with a successful status code (2xx)
        const ideas = response.data;
        console.log('Ideas received:', ideas);
        // Now you can do something with the ideas data on the client-side
    })
    .catch((error) => {
        // Handle errors, e.g., server is down, network issues, etc.
        console.error('Error fetching ideas:', error);
    });
