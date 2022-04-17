import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms"
import { RatingModule } from "../shared/components/rating/rating.module"
import { TagsModule } from "../shared/components/tags/tags.module"
import { PlaceEditComponent } from './components/place-edit/place-edit.component';
import {EditorModule} from "../shared/components/editor/editor.module";

@NgModule({
  declarations: [
    PlaceEditComponent
  ],
  exports: [
    PlaceEditComponent
  ],
    imports: [
        CommonModule,
        RatingModule,
        ReactiveFormsModule,
        TagsModule,
        EditorModule
    ]
})
export class PlaceEditDialogModule { }
