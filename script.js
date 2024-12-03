fetch('config.json')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log('JSON data loaded:', data);
    const prezentyDiv = document.getElementById('prezenty');
    for (const [key, value] of Object.entries(data)) {
        console.log('Processing:', key, value);
        const [link, description] = value;

        const presentDiv = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = key;

        const desc = document.createElement('p');
        desc.textContent = `Opis: ${description}`;

        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.textContent = 'Zobacz prezent';
        anchor.style.display = 'block';

        presentDiv.appendChild(title);
        presentDiv.appendChild(desc);
        presentDiv.appendChild(anchor);
        prezentyDiv.appendChild(presentDiv);
    }
})
.catch(error => console.error('Error loading config.json:', error));
