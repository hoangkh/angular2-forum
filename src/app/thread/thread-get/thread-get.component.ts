import { Component, OnInit } from '@angular/core';
import { Thread } from '../Thread';
import { ThreadService } from '../thread.service';

@Component({
  selector: 'app-thread-get',
  templateUrl: './thread-get.component.html',
  styleUrls: ['./thread-get.component.scss']
})
export class ThreadGetComponent implements OnInit {
  threads: Thread[];
  constructor(private ts: ThreadService) { }

  ngOnInit() {
    this.ts
      .getThreads()
      .subscribe((data: Thread[]) => {
        this.threads = data;
    });
  }

}

