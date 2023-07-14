import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* 
  name: string = 'Ryan Ray';
  age: number;
  address: {
    street: string,
    city: string
  };
  hobbies: string [];

constructor() {
  this.age = 28;
  this.address = {
    street: '221B Baker Street',
    city: 'London'
  };
  this.hobbies = ['swimming', 'read', 'write'];
} 
*/

name: string = 'Jhon Carter';
age: number = 28;

users: string[] = ['Ryan', 'Joe', 'Cameron'];
posts:any = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    })
  }


/*   
  sayHello() {
      alert('Hello!');
  } 
*/

  addUser(newUser) {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }

  deleteUser(user) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }

}
