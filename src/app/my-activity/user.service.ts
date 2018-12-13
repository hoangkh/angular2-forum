// // User.service.ts

// import {
//   Injectable
// } from '@angular/core';
// import {
//   HttpClient
// } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   uri = 'http://localhost:4000/user';

//   constructor(private http: HttpClient) {}

//   addUser(user_name, user_email, user_password) {
//     const obj = {
//       user_name: user_name,
//       user_email: user_email,
//       user_password: user_password
//     };
//     this.http.post(`${this.uri}/add`, obj)
//       .subscribe(res => console.log('Done'));
//   }

//   editUser(id) {
//     return this
//       .http
//       .get(`${this.uri}/edit/${id}`);
//   }

//   updateUser(user_name, user_email, user_password, id) {
//     const obj = {
//       user_name: user_name,
//       user_email: user_email,
//       user_password: user_password
//     };
//     this
//       .http
//       .post(`${this.uri}/update/${id}`, obj)
//       .subscribe(res => console.log('Done'));
//   }
//   deleteUser(id) {
//     return this
//       .http
//       .get(`${this.uri}/delete/${id}`);
//   }
// }



// business.service.ts

import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000/user';

  constructor(private http: HttpClient) {}

  addUser(user_name, user_email, user_password) {
    const obj = {
      user_name: user_name,
      user_email: user_email,
      user_password: user_password
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

}
