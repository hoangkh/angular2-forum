import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.scss']
})
export class ThreadDetailComponent implements OnInit {
  thread_title = "Thread Title";
  user_name = "User name";
  post_created = "Date-Time";
  post_order = "#";
  constructor() { }

  ngOnInit() {
  }

}
