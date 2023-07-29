const ideasUrl =
    'https://fund-raising-project-server-side.azurewebsites.net/ideas';

async function getIdeas() {
    try {
        const response = await fetch(ideasUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    } catch (error) {
        console.error(
            `An error occurred while fetching ideas: ${error.message}`
        );
        throw error;
    }
}

module.exports = getIdeas;
