
const p1 = new Promise(resolve => setTimeout(() => resolve('a'), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve('b'), 4000));
const p3 = new Promise((resolve, reject) => setTimeout(() => reject('c'), 6000));
const p4 = new Promise(resolve => setTimeout(() => resolve('d'), 8000));

p1.then(results => console.log(results + ' done'));
p2.then(results => console.log(results + ' done'));
p3.then(results => console.log(results + ' done'))
    .catch(results => console.log(results + ' rejected'));
p4.then(results => console.log(results + ' done'));

const p5 = Promise.all([p1,p2]);

p5.then(results => console.log('p1 and p2 done' + results));

Promise.all([p5, p3, p4]).then(results => {
    console.log(results);
    console.log('all done');
}).catch(results => {

    console.log(results);
    console.log('one failed');

});

