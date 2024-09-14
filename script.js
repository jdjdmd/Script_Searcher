document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value;
    if (query.length > 2) {
        searchScripts(query);
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
