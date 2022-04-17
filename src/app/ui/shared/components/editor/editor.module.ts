import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconComponent} from "../icon/icon.component";
import {EditorComponent} from "./editor.component";
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
      EditorComponent
    ],
    exports: [
      EditorComponent
    ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EditorModule { }
