const ideasUrl =
    'https://fund-raising-project-server-side.azurewebsites.net/ideas';

async function getIdeas() {
    try {
        const response = await fetch(ideasUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const ideas = await response.json();
        return ideas;
    } catch (error) {
        console.error(
            `An error occurred while fetching ideas: ${error.message}`
        );
        throw error;
    }
}

async function findIdea(ideaId) {
    if (!ideaId) {
        throw new Error('Please provide an idea id');
    }
    try {
        const ideas = await getIdeas();
        const idea = ideas.find((idea) => idea.id === ideaId);
        return idea;
    } catch (error) {
        console.error(
            `An error occurred while fetching ideas: ${error.message}`
        );
    }
}

module.exports = { getIdeas, findIdea };
