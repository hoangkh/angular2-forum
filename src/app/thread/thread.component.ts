import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  threadId: string;
  constructor() { }

  ngOnInit() {
  }
  receiveThreadId($event) {
    this.threadId = $event;
    console.log(this.threadId);
  }
}
