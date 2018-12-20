import { Component, OnInit } from '@angular/core';
import { Thread } from '../thread/Thread';
import { ThreadService } from '../thread/thread.service';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent implements OnInit {
  threadId: string;
  threads: Thread[];
  constructor(private ts: ThreadService) { }

  ngOnInit() {
    this.ts
      .getThreads()
      .subscribe((data: Thread[]) => {
        this.threads = data;
    });
  }

  receiveThreadId($event) {
    this.threadId = $event;
    console.log(this.threadId);
  }
}
