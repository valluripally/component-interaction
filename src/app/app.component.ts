import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-assignment';

  oddNumber :number[]=[];
  evenNumber :number[]=[];
  printVal(firedNumber:number){
   console.log(firedNumber);
    if(firedNumber%2!=0)
    this.oddNumber.push(firedNumber);
    else
    this.evenNumber.push(firedNumber);
  }
}
