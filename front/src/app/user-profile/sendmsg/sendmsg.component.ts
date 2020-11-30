import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../shared/message.service';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-sendmsg',
  templateUrl: './sendmsg.component.html',
  styleUrls: ['./sendmsg.component.css']
})
export class SendmsgComponent implements OnInit {
  public email = '';
  public userDetails;
  constructor(private route: ActivatedRoute, private msg: MessageService, private userService: UserService) { }

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => {
        console.log(err);
      }
    );
  }
  onSubmit(form: NgForm) {
    form.value.sender = this.userDetails.email;
    form.value.receiver = this.email;
    this.msg.sendmdg(form.value).subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error)
    );
    alert(' Message Send Successfully ');
  }

}
