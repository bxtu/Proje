import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-platform-page',
  templateUrl: './platform-page.component.html',
  styleUrl: './platform-page.component.scss'
})
export class PlatformPageComponent {
  constructor(
    private userService: UserService
  ) { }

  onSubmit(data:NgForm){
    this.userService.createUser(data.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
