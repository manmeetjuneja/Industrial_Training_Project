import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {ProfileService} from '../../shared/profile.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Profile} from '../../shared/profile.model';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  constructor(private userService: UserService, private proservice: ProfileService , private sanitizer: DomSanitizer) { }
  userDetails = '';
  public email = '';
  public apiurl = 'http://localhost:3000';
  public selecteduser = new Profile();

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
        const mapped = Object.entries(this.userDetails).map(([type, value]) => ({type, value}));
        this.proservice.getpro(mapped[1].value).subscribe(
          res1 => {
            this.selecteduser = res1 as Profile;
          });
      },
      err => {
        console.log(err);

      }
    );
  }
  getSafeUrl(fpic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' + fpic);
 }
}
