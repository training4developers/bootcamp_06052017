

const youngMan = new Promise(function youngLady(resolve, reject) {

    setTimeout(function() {
        resolve('she is madly in love with him!');
    }, 2000);

});


youngMan.then(function(results) {
    // resolve
    console.log(results);
    console.log('yay! she said yes!');
    console.log('looking for a place to get married!');

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('found a place to get married!');
        }, 2000);

    });

    // then function
    // return;
    //return 'some value';

    // unknown until resolves or rejects
    //return new Promise();
    
    // catch function
    //return Promise.reject('could not find a place to get married...');

}).then(function(results) {

    console.log(results);
    console.log('find a caterer!');
    // another async operation

}).catch(function (results) {
    // reject
    console.log('crying his eyes out! she said no!');
    console.log(results);
});

console.log('young man waiting...');