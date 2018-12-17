//thread.service

import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  uri = 'http://localhost:4000/thread';

  constructor(private http: HttpClient) {}

  addThread(thread_title, thread_category, post_description, user_id, post_id,  post_created) {
    const obj = {
      thread_title: thread_title,
      thread_category: thread_category,
      thread_posts: {
        post_description,
        user_id,
        post_id,
        post_created
      }
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getThreads() {
    return this
      .http
      .get(`${this.uri}`);
  }

}
