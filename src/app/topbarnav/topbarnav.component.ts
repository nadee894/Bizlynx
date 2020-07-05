import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbarnav',
  templateUrl: './topbarnav.component.html',
  styleUrls: ['./topbarnav.component.css']
})
export class TopbarnavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open: boolean = false;

  openNotifications(event) {
    event.srcElement.classList.add("open");
    //this.open = !this.open;
  }


}
