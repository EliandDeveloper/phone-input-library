import { InjectionToken } from '@angular/core';
import { CountryInfo } from './enums/country-info';

export interface PhoneInputLibConfig {
  defaultCountry?: string;
  countryInfo?: Record<string, CountryInfo>;
}

export const PHONE_INPUT_LIB_CONFIG = new InjectionToken<PhoneInputLibConfig>('PhoneInputLibConfig');
