const http = require('http');
http.get('http://localhost:3000', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        // Find the error message string
        const match = rawData.match(/Error:\s([^<]+)/g);
        if (match) {
            console.log(match.slice(0, 5).join('\n'));
        } else {
            console.log("No error found in HTML. Snippet: ", rawData.slice(0, 1000));
        }
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});
