import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // 첫 화면을 login 페이지로 설정
  { path: 'login', component: LoginComponent, }, // url 경로가 /login 일때 LoginComponent를 보여준다.
  { path: 'main', component: MainComponent, }, // url 경로가 /contents 일때 MainComponent 보여준다.
  // { path: '**', redirectTo: '/login', pathMatch: 'full' }, // 잘못된 URL을 사용했을때 Login 페이지로 돌려보냄.
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- 디버그 활성화
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
