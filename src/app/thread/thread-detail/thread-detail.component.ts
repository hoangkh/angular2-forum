import { Component, OnInit, Output } from '@angular/core';
import { Thread } from '../Thread';
import { ThreadService } from '../thread.service';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.scss']
})
export class ThreadDetailComponent implements OnInit {
  thread_title = "Thread Title";
  
  threads: Thread[];
  constructor(private ts: ThreadService) { }

  ngOnInit() {
    this.ts
      .getThreads()
      .subscribe((data: Thread[]) => {
        this.threads = data;
    });
  }

  threadId: string;
  
  receiveThreadId($event) {
    this.threadId = $event;
    console.log(this.threadId);
  }

}
