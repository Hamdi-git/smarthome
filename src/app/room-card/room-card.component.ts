import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoomDetailsComponent } from '../room-details/room-details.component';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnInit {


  @Input() name: string = '';
  @Input() marque: string = '';
  @Input() img: string = '';


  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(){
    
    this.dialog.open(RoomDetailsComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

}
