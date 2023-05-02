import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';

const routes: Routes = [
  {
    path: 'logar',
    component: LoginComponent
  },
  {
    path: 'criar-conta',
    component: SignComponent
  },
  {
    path: '**',
    redirectTo: 'logar',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
