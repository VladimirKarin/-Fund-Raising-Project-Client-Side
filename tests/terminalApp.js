const getIdeas = require('../src/data/ideas');
const URL = 'https://fund-raising-project-server-side.azurewebsites.net/ideas';

getIdeas()
    .then((ideas) => console.log(ideas))
    .catch((error) => console.error(error));
