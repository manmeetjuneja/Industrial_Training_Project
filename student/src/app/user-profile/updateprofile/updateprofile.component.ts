import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { ProfileService} from '../../shared/profile.service';
import {Profile } from '../../shared/profile.model';
import { NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  public userDetails;
  selectedfile: File = null;
  public selecteduser = new Profile();
  public apiurl = 'http://localhost:3000';
  constructor(private userService: UserService, private proservice: ProfileService , private http: HttpClient ,
     private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
        this.proservice.getpro(this.userDetails.email).subscribe(
          res1 => {
            this.selecteduser = res1 as Profile;
            console.log(this.selecteduser);
          });
      },
      err => {
        console.log(err);

      }
    );
  }
  onfileselect(event) {
    this.selectedfile = <File>event.target.files[0];
  }

  onSubmit(form: NgForm) {
    form.value.picture = this.selectedfile.name;
    const fd = new FormData();
    fd.append('image', this.selectedfile, this.selectedfile.name);
    this.http.post('http://localhost:3000/pics', fd).subscribe( res => {
    });
   this.proservice.insertprofile(form.value).
   subscribe(
     data => console.log('Success', data),
     error => console.error('Error', error)
   );
   alert(' Data Saved Successfully ');
  }
}
