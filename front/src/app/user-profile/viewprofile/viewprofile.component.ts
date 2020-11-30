import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../shared/profile.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Profile} from '../../shared/profile.model';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  public email = '';
  public apiurl = 'http://localhost:3000';
  public selecteduser = new Profile();

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer , private proservice: ProfileService ,
    private router: Router) { }

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');
    this.proservice.getpro(this.email).subscribe(
      res1 => {
        this.selecteduser = res1 as Profile;
      });
  }
  getSafeUrl(fpic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' + fpic);
 }
 sendmsg() {
  this.router.navigate ( [ 'userprofile/sendmsg', {email: this.email} ] );

 }

}
