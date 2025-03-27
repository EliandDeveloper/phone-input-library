import { Pipe, PipeTransform, Inject, Optional } from '@angular/core';
import { PHONE_INPUT_LIB_CONFIG, PhoneInputLibConfig } from '../phone-input-lib.config';
import { DEFAULT_COUNTRY_INFO } from '../enums/country-info';

@Pipe({
  name: 'phonePrefix'
})
export class PhonePrefixPipe implements PipeTransform {
  private countryInfo: Record<string, any>;
  constructor(@Optional() @Inject(PHONE_INPUT_LIB_CONFIG) config: PhoneInputLibConfig) {
    this.countryInfo = config?.countryInfo || DEFAULT_COUNTRY_INFO;
  }
  transform(countryKey: string | number): string {
    return this.countryInfo[countryKey as string]?.code || '';
  }
}
