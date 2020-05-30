import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from './angular-material.module';
import { CardNewComponent } from './card-new/card-new.component';



@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [HeaderComponent, CardNewComponent],
  exports: [HeaderComponent, CardNewComponent]
})
export class SharedModule { }
