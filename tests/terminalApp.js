const { getIdeas, findIdea } = require('../src/data/ideas');
const { createDonation } = require('../src/data/donations');

/*
//FR-79 Function that get all ideas.
getIdeas()
    .then((ideas) => console.log(ideas))
    .catch((error) => console.error(error));

//FR-80 Function that find an idea
findIdea('a6bbff48-113a-46fb-9338-9e5844275e1f')
    .then((idea) => console.log(idea))
    .catch((error) => console.error(error));
*/
//FR-81 Function that create a donation
createDonation('5001b5d8-8b31-41d2-a02c-731e77d06d76', null, 90, 'Vovchik')
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
