import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../shared/message.service';
import {UserService} from '../../shared/user.service';
import { Message} from '../../shared/message.model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-viewmsg',
  templateUrl: './viewmsg.component.html',
  styleUrls: ['./viewmsg.component.css']
})
export class ViewmsgComponent implements OnInit {
  userDetails;
  public msgs = [];
  public email = '';
  constructor(private msg: MessageService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.email = this.userDetails.email;
        this.msg.viewmsg(this.email).subscribe(
          res1 => {
            this.msgs = res1 as Message[];
            console.log(this.msgs);
          }
        );
      },
      err => {
        console.log(err);

      }
    );
  }
  reply(email) {
    this.router.navigate ( [ 'userprofile/sendmsg', {email: email} ] );
  }

}
