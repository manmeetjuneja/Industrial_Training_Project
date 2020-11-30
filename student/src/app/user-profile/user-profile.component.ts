import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ProfileService} from '../shared/profile.service';
import { Profile} from '../shared/profile.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  public email = '';
  public mapped;
  public selectedprofile = new Profile();
  constructor(private userService: UserService, private router: Router , private proservice: ProfileService) {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
        this.proservice.getpro(this.userDetails.email).subscribe(
          res1 => {
            this.selectedprofile = res1 as Profile;
            this.mapped = Object.entries(this.selectedprofile).map(([type, value]) => ({type, value}));
          });
      },
      err => {
        console.log(err);

      }
    );
   }

  ngOnInit() {
  }
  myprofile() {
    if (this.mapped.length === 0) {
      this.router.navigate(['userprofile/updateprofile']);

    } else {
      this.router.navigate(['userprofile/viewprofile']);
    }
  }
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
