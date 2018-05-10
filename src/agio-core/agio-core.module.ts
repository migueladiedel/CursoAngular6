import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizerComponent } from './component/font-sizer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ FontSizerComponent, ],
  exports: [ FontSizerComponent ],
})
export class AgioCoreModule {
  constructor( @Optional() @SkipSelf() parentModule: AgioCoreModule) {
    if (parentModule) {
      // tslint:disable-next-line:no-trailing-whitespace
      const msg = `ModuleName has already been loaded.
        Import ModuleName once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}

