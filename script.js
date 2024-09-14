document.getElementById('searchBar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = this.value;
        if (query.length > 2) {
            searchScripts(query);
        }
    }
});

async function searchScripts(query) {
    try {
        const response = await fetch(`https://api.scriptblox.com/search?query=${query}`);
        const data = await response.json();
        displayResults(data.results);
    } catch (error) {
        console.error('Error fetching scripts:', error);
    }
}

async function fetchTrendingScripts() {
    try {
        const response = await fetch(`https://api.scriptblox.com/trending`);
        const data = await response.json();
        displayTrending(data.results);
    } catch (error) {
        console.error('Error fetching trending scripts:', error);
    }
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <h3>${result.title}</h3>
            <p>${result.description}</p>
        `;
        resultsContainer.appendChild(resultItem);
    });
}

function displayTrending(results) {
    const trendingContainer = document.getElementById('trending');
    trendingContainer.innerHTML = '';
    results.forEach(result => {
        const trendingItem = document.createElement('div');
        trendingItem.className = 'trending-item';
        trendingItem.innerHTML = `
            <h3>${result.title}</h3>
            <p>${result.description}</p>
        `;
        trendingContainer.appendChild(trendingItem);
    });
}

// Fetch trending scripts on page load
fetchTrendingScripts();
