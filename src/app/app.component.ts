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
    of(1,2,3,4,5,6).subscribe(console.log)

    from(['Hello','Hi', 'Namaste']).subscribe(
      item => {console.log(`Next value is ${item}`)},
      err => {console.log(`Error is ${err}`)},
      ()=>{ console.log(`Stream Completed`) }
    )
  }
}
