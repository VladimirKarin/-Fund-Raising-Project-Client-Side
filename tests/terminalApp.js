const { getIdeas, findIdea } = require('../src/data/ideas');

// getIdeas()
//     .then((ideas) => console.log(ideas))
//     .catch((error) => console.error(error));

findIdea('a6bbff48-113a-46fb-9338-9e5844275e1f')
    .then((idea) => console.log(idea))
    .catch((error) => console.error(error));
