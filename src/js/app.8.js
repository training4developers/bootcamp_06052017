const getCurrentLocation = () => {
    return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(results => resolve(results));
    });
};

const ajaxRequest = (method, url, body) => {

    return new Promise(resolve => {

        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', () => {
            if (xhr.status >= 200 && xhr.status < 300 && xhr.readyState === 4) {
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

const addAndGetLocations  = async () => {

    const position = await getCurrentLocation();
    console.log(position);

    await fetch('http://localhost:3010/location_history', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        }),
    } );

    const locations = await fetch('http://localhost:3010/location_history')
        .then(res => res.json());
    
    return locations;
}

addAndGetLocations().then(locations => console.log(locations));