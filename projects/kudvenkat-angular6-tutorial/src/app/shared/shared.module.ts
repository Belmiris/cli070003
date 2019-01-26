import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    //CommonModule    // NOTE: We can re-export an angular module without first puttng it in our imports array.
  ],
  declarations: [],
  exports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
