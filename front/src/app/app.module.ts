// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FileSelectDirective } from 'ng2-file-upload';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { CategoryService } from './shared/category.service';
import {FoodService} from './shared/food.service';
import { QuestionService} from './shared/question.service';
import { VwuserService} from './shared/vwuser.service';
import { ResultService} from './shared/result.service';
import { ProfileService } from './shared/profile.service';
import { MessageService} from './shared/message.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AddcategoryComponent } from './user-profile/addcategory/addcategory.component';
import { ViewcategoryComponent } from './user-profile/viewcategory/viewcategory.component';
import { EditcategoryComponent } from './user-profile/editcategory/editcategory.component';
import { AddfoodComponent } from './user-profile/addfood/addfood.component';
import { ViewfoodComponent } from './user-profile/viewfood/viewfood.component';
import { EditfoodComponent } from './user-profile/editfood/editfood.component';
import { AddquestionComponent } from './user-profile/addquestion/addquestion.component';
import { ViewquestionComponent } from './user-profile/viewquestion/viewquestion.component';
import { EditquestionComponent } from './user-profile/editquestion/editquestion.component';
import { ViewuserComponent } from './user-profile/viewuser/viewuser.component';
import { ResultComponent } from './user-profile/result/result.component';
import { ResdetailComponent } from './user-profile/resdetail/resdetail.component';
import { ViewprofileComponent } from './user-profile/viewprofile/viewprofile.component';
import { SendmsgComponent } from './user-profile/sendmsg/sendmsg.component';
import { ViewmsgComponent } from './user-profile/viewmsg/viewmsg.component';
import { OutboxComponent } from './user-profile/outbox/outbox.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    AddcategoryComponent,
    ViewcategoryComponent,
    EditcategoryComponent,
    AddfoodComponent,
    ViewfoodComponent,
    EditfoodComponent,
    FileSelectDirective,
    AddquestionComponent,
    ViewquestionComponent,
    EditquestionComponent,
    ViewuserComponent,
    ResultComponent,
    ResdetailComponent,
    ViewprofileComponent,
    SendmsgComponent,
    ViewmsgComponent,
    OutboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService , CategoryService, FoodService, QuestionService, VwuserService , ResultService , ProfileService ,
   MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
