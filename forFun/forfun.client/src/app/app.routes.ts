import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  // Auth pages
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Information pages
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },

  // Catch-all route for 404
  { path: '**', redirectTo: '' }
];
