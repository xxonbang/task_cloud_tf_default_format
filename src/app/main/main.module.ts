import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRouterModule } from './main.router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';



@NgModule({
  declarations: [
    Menu1Component,
    Menu2Component],

  imports: [
    CommonModule,
    MainRouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class MainModule { }
