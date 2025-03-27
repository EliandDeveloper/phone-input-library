import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { PhoneInputComponent } from './components/phone-input/phone-input.component';
import { InternationalPhonePipe } from './pipes/international-phone.pipe';
import { PhonePrefixPipe } from './pipes/phone-prefix.pipe';
import { PHONE_INPUT_LIB_CONFIG, PhoneInputLibConfig } from './phone-input-lib.config';

@NgModule({
  declarations: [
    PhoneInputComponent,
    InternationalPhonePipe,
    PhonePrefixPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    PhoneInputComponent,
    InternationalPhonePipe,
    PhonePrefixPipe
  ]
})
export class PhoneInputLibModule {
  static forRoot(config: PhoneInputLibConfig): ModuleWithProviders<PhoneInputLibModule> {
    return {
      ngModule: PhoneInputLibModule,
      providers: [
        { provide: PHONE_INPUT_LIB_CONFIG, useValue: config }
      ]
    };
  }
}
