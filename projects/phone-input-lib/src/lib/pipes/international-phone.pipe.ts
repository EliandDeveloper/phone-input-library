import { Pipe, PipeTransform, Inject, Optional } from '@angular/core';
import { PHONE_INPUT_LIB_CONFIG, PhoneInputLibConfig } from '../phone-input-lib.config';
import { DEFAULT_COUNTRY_INFO } from '../enums/country-info';

@Pipe({
  name: 'internationalPhone'
})
export class InternationalPhonePipe implements PipeTransform {
  private countryInfo: Record<string, any>;
  constructor(@Optional() @Inject(PHONE_INPUT_LIB_CONFIG) config: PhoneInputLibConfig) {
    this.countryInfo = config?.countryInfo || DEFAULT_COUNTRY_INFO;
  }
  transform(phone: string, countryKey: string): string {
    if (!phone || !countryKey) return '';
    const code = this.countryInfo[countryKey]?.code || '';
    return `${code} ${phone}`;
  }
}
