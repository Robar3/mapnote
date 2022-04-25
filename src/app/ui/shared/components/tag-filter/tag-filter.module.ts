import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TagFilterComponent} from "./tag-filter.component";



@NgModule({
  declarations: [
    TagFilterComponent
  ],
  exports: [
    TagFilterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TagFilterModule { }
