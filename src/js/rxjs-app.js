import { Observable } from 'rxjs';

const nums = Observable.create(observer => {

    console.log('instance created');

    let counter = 0;

    setInterval(() => {

        observer.next(counter++);

    }, 500);

});

nums.map(x => x * 2).subscribe(data => console.log(1, data));

setTimeout(() => {
    nums.map(x => x * 2).subscribe(data => console.log(2, data));
}, 3000);

