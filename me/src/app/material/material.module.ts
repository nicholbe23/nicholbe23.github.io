import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from "@angular/material/toolbar";

const material = [MatButtonModule, MatButtonToggleModule, MatToolbarModule]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
