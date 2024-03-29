import { Component, OnInit } from '@angular/core';
import {of, from } from 'rxjs'
import {map, tap, take} from 'rxjs/operators'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit () {
    of(1,2,3,4,5,6).pipe(
      tap(item => console.log(`Original item ${item}`)),
      map( item => item * 2 ),
      tap(item => console.log(`Transfermed item ${item}`)),
      map(item => {
        if (item === 0){
          throw new Error(`Zero Detected ${item}`);
        }
        return item;
      })
    ).subscribe(
      item => {console.log(`Next value is ${item}`)},
      err => {console.log(`Error is ${err}`)},
      ()=>{ console.log(`Stream Completed`) }
    )

    from([3,4,5,6,8])
    .pipe( 
      tap(i => console.log(`Value before map ${i}`)),
      map(i => i*4),
      tap(i => console.log(`Value after map ${i}`))
     )
    .subscribe(
      item => {console.log(`Next value is ${item}`)},
      err => {console.log(`Error is ${err}`)},
      ()=>{ console.log(`Stream Completed`) }
    )

    from(['Hello','Hi', 'Namaste'])
    .subscribe(
      item => {console.log(`Next value is ${item}`)},
      err => {console.log(`Error is ${err}`)},
      ()=>{ console.log(`Stream Completed`) }
    )
  }
}
