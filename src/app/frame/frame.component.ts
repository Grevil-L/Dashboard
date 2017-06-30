import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  username: string;

  constructor() {
    this.username = '16@test.com';
  }

  profile(){
    alert('profile coming soon!');
  }

  logout() {
    alert('you clicked log out!');
  }

  ngOnInit() {
  }

}
