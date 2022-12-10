import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'smarthome';
  clockTime: string = '';

  userName: string = 'Rawdha';

  ngOnInit(): void {
    setInterval(() => {
      this.clockTime = new Date().toLocaleTimeString();
    }, 1000);
  }

}
