const URLS = {
    CATEGORIES: 'https://api.chucknorris.io/jokes/categories',
    RANDOM_FACT: 'https://api.chucknorris.io/jokes/random',
    RANDOM_CATEGORY_FACT:
        'https://api.chucknorris.io/jokes/random?category={category}',
    SEARCH: 'https://api.chucknorris.io/jokes/search?query={query}',
};

const ApiData = {
    async getCategories() {
        try {
            const response = await fetch(URLS.CATEGORIES);
            const categories = await response.json();
            return categories.sort();
        } catch (error) {
            return console.error(error);
        }
    },
    async getRandomFact(category: string) {
        let url;
        if (category == 'random') {
            url = URLS.RANDOM_FACT;
        } else {
            url = URLS.RANDOM_CATEGORY_FACT.replace('{category}', category);
        }

        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            return console.error(error);
        }
    },

    async findFacts(query: string) {
        try {
            const response = await fetch(URLS.SEARCH.replace('{query}', query));
            return await response.json();
        } catch (error) {
            return console.error(error);
        }
    },
};

export default ApiData;
