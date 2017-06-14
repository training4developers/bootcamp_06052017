
let con;

const db = new SQLite();

db.open(function(c) {

    let con = c;
    db.query(con, 'select * from cars', function() {
        
    });
});







let counter = 0;

const allDone = () => {
    console.log('all done');
};

counter++;
setTimeout(() => {
    console.log('a');
    counter--;
    if (counter === 0) {
        allDone();
    }
}, 2000);

counter++;
setTimeout(() => {
    console.log('b');
    counter--;
    if (counter === 0) {
        allDone();
    }
}, 500);

counter++;
setTimeout(() => {
    console.log('c');
    counter--;
    if (counter === 0) {
        allDone();
    }
}, 1000);



// setTimeout(function() {
//     console.log('data one');

//     setTimeout(function() {
//         console.log('data two');

//         setTimeout(function() {
//             console.log('data three');

//             setTimeout(function() {
//                 console.log('data four');
//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);


