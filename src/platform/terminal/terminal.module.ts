import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdTerminalComponent } from './terminal.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdTerminalComponent,
  ],
  exports: [
    TdTerminalComponent,
  ],
  entryComponents: [ ],
  bootstrap: [ TdTerminalComponent ],
})
export class CovalentTerminalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentTerminalModule,
      providers: [ ],
    };
  }
}
