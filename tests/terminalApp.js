const getIdeas = require('../src/data/ideas');

getIdeas()
    .then((ideas) => console.log(ideas))
    .catch((error) => console.error(error));
