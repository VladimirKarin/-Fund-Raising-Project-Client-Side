const serverUrl =
    'https://fund-raising-project-server-side.azurewebsites.net/donations';

async function createDonation(ideaId, userId, sum, firstName) {
    try {
        const body = userId
            ? { ideaId, userId, sum }
            : { ideaId, firstName, sum };
        const response = await fetch(serverUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error('Failed to create donation');
        }
        return response.json();
    } catch (error) {
        console.error(
            `An error occurred while creating donation: ${error.message}`
        );
    }
}

module.exports = {
    createDonation,
};
