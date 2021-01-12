import { of, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';


const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);

const obserwable = new Observable(subscriber => subscriber.next('hello'));

source.subscribe(console.log);