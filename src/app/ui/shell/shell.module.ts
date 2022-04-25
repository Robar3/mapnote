import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"
import { IconModule } from "../shared/components/icon/icon.module"
import { PlaceCardModule } from "../shared/components/place-card/place-card.module"
import { ShellComponent } from "./components/shell/shell.component"
import {TagFilterModule} from "../shared/components/tag-filter/tag-filter.module";

@NgModule({
  declarations: [
    ShellComponent
  ],
  exports: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule, 
    TagFilterModule
  ]
})
export class ShellModule {
}
