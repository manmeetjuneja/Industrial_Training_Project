import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../shared/message.service';
import {UserService} from '../../shared/user.service';
import { Message} from '../../shared/message.model';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.css']
})
export class OutboxComponent implements OnInit {
  userDetails;
  public msgs = [];
  public email = '';
  constructor(private msg: MessageService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
        this.email = this.userDetails.email;
        this.msg.outbox(this.email).subscribe(
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

}

