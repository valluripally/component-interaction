import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  @Output() emitedVal =new EventEmitter<number>();

  val :number =0;
  id:any ;
  ngOnInit(): void {
  }

  onStartGame(){
   this.id=  setInterval(()=>{
      this.getValue();
    },1000);
}

  getValue(){
    this.val++;

      this.emitedVal.emit( this.val);
  }

  onstopGame(){
clearInterval(this.id);
  }
  

}
