import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { StgcButtonComponent } from './components/stgc-button/stgc-button.component';
import { PasswordSetupComponent } from './components/password-setup/password-setup.component';
import { StgcPasswordComponent } from './components/stgc-password/stgc-password.component';
import { PasswordChangeSuccessComponent } from './components/password-change-success/password-change-success.component'

const appRoutes: Routes = [
  { path: '', component: PasswordResetComponent },
  { path: 'setup', component: PasswordSetupComponent },
  { path: 'success', component: PasswordChangeSuccessComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PasswordResetComponent,
    LoginPageComponent,
    StgcButtonComponent,
    PasswordSetupComponent,
    StgcPasswordComponent,
    PasswordChangeSuccessComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(
      appRoutes, {
        useHash: true
      }
      // { enableTracing: true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
