
const getCurrentLocation = () => {
    return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(results => resolve(results));
    });
};

getCurrentLocation().then(results => console.dir(results));

const ajaxRequest = (method, url, body) => {

    return new Promise(resolve => {

        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                resolve(JSON.parse(xhr.responseText));
            }
        });

        xhr.open(method, url);

        if (body) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(body));
        } else {
            xhr.send();
        }

    });

};

ajaxRequest('POST', 'http://localhost:3010/widgets', { name: 'New Widget' })
    .then(results => console.dir(results));