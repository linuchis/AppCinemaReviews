export const getMovies = async () => {
    try {
        const response = await fetch('https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortBy=-metaScore&productType=movies&page=1&offset=0&limit=24&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u');
        const json = await response.json();
        return json.data.items;
    } catch (error) {
        console.error(error);
        return [];
    }
};
