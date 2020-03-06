import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';


const MainRoutes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [
      { path: 'menu1', component: Menu1Component },
      { path: 'menu2', component: Menu2Component }
    ],
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

export const MainRouterModule = RouterModule.forChild(MainRoutes);
