import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CountryInfo } from '../enums/country-info';
import { DEFAULT_COUNTRY_INFO } from '../enums/country-info';

export function phoneMinLengthValidator(
  countryKey: string,
  countryInfo: Record<string, CountryInfo> = DEFAULT_COUNTRY_INFO
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!countryKey) return null;
    const rawValue = (control.value || '').replace(/\D/g, '');
    const maxLength = countryInfo[countryKey]?.maxLength ?? 10;
    if (rawValue.length < maxLength) {
      return {
        minlength: {
          requiredLength: maxLength,
          actualLength: rawValue.length
        }
      };
    }
    return null;
  };
}
