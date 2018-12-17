import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { ThreadService } from '../thread.service';

@Component({
  selector: 'app-thread-add',
  templateUrl: './thread-add.component.html',
  styleUrls: ['./thread-add.component.scss']
})

export class ThreadAddComponent implements OnInit {
  post_id = '001';
  user_id = '001';
  post_created = '1544746404';
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ts: ThreadService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      thread_title: ['', Validators.required ],
      thread_category: ['', Validators.required ],
      post_description: ['', Validators.required ]
    });
  }

  addThread(thread_title, thread_category, post_description, post_id, post_created, user_id) {
    this.ts.addThread(thread_title, thread_category, post_description, post_id, post_created, user_id);
  }

  ngOnInit() {
  }

}
