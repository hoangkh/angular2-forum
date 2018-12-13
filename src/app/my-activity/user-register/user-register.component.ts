import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private us: UserService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      user_name: ['', Validators.required ],
      user_email: ['', Validators.required ],
      user_password: ['', Validators.required ]
    });
  }

  addUser(user_name, user_email, user_password) {
    this.us.addUser(user_name, user_email, user_password);
  }

  ngOnInit() {
  }

}
