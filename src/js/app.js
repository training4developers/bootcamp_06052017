
import { Observable } from 'rxjs';

const nums = Observable.create(observer => {

    console.log('called observable');

    let counter = 0;
    setInterval(() => {
        counter++;
        observer.next(counter);
    }, 500);

});

nums.map(n => n * 2).subscribe(data => {
    console.log(1, data);
});

// setTimeout(() => {
//     nums.subscribe(data => {
//         console.log(2, data);
//     });
// }, 3000);