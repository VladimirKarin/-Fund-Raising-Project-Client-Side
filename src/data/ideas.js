// ideas.js
const axios = require('axios');
const URL = 'https://fund-raising-project-server-side.azurewebsites.net/ideas';

function getIdeas() {
    return axios
        .get(URL)
        .then((response) => {
            const ideas = response.data;

            if (!Array.isArray(ideas)) {
                throw new Error('Data should be an array.');
            }

            return ideas;
        })
        .catch((error) => {
            throw new Error(
                `Failed to fetch ideas from the server: ${error.message}`
            );
        });
}

module.exports = getIdeas;
