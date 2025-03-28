import { Component, Input, OnInit, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PHONE_INPUT_LIB_CONFIG, PhoneInputLibConfig } from '../../phone-input-lib.config';
import { DEFAULT_COUNTRY_INFO, CountryInfo } from '../../enums/country-info';
import { phoneMinLengthValidator } from '../../validators/phone-min-length.validator';

@Component({
  selector: 'lib-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // Changed to ShadowDom for better encapsulation
})
export class PhoneInputComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  phoneForm: FormGroup;
  countryKeys: string[] = [];
  countryInfo: Record<string, CountryInfo>;
  defaultCountry: string;

  constructor(
    private fb: FormBuilder,
    @Optional() @Inject(PHONE_INPUT_LIB_CONFIG) private config: PhoneInputLibConfig
  ) {
    // Use custom config if provided; otherwise fall back to defaults.
    this.countryInfo = config?.countryInfo || DEFAULT_COUNTRY_INFO;
    this.defaultCountry = config?.defaultCountry || 'Venezuela';

    this.phoneForm = this.fb.group({
      country: [this.defaultCountry, Validators.required],
      number: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Build the list of countries from the provided configuration.
    this.countryKeys = Object.keys(this.countryInfo)
      .sort((a, b) => this.countryInfo[a].name.localeCompare(this.countryInfo[b].name));

    // Update validator when country changes.
    this.phoneForm.get('country')?.valueChanges.subscribe((country) => {
      this.setDynamicNumberValidators(country);
      this.phoneForm.patchValue({ number: '' }, { emitEvent: false });
      this.syncPhoneWithParentForm();
    });

    // Initialize validator.
    const initialCountry = this.phoneForm.get('country')?.value;
    this.setDynamicNumberValidators(initialCountry);

    // Sync value with parent form.
    this.phoneForm.valueChanges.subscribe(() => this.syncPhoneWithParentForm());
  }

  setDynamicNumberValidators(country: string): void {
    const numberControl = this.phoneForm.get('number');
    if (!numberControl) return;
    numberControl.clearValidators();
    numberControl.addValidators([
      Validators.required,
      phoneMinLengthValidator(country, this.countryInfo)
    ]);
    numberControl.updateValueAndValidity({ emitEvent: false });
  }

  syncPhoneWithParentForm(): void {
    if (!this.parentForm) return;
    const phoneControl = this.parentForm.get('phone');
    if (!phoneControl) return;

    const numberValue = this.phoneForm.get('number')?.value;
    phoneControl.setValue(numberValue ? this.fullNumber : '', { emitEvent: false });
    phoneControl.markAsDirty();
  }

  get maxLength(): number {
    const country = this.phoneForm.get('country')?.value;
    return this.countryInfo[country]?.maxLength || 10;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const countryKey = this.phoneForm.get('country')?.value;
    const country = this.countryInfo[countryKey];
    if (!country) return;

    let digits = input.value.replace(/\D/g, '');
    if (digits.length > country.maxLength) {
      digits = digits.slice(0, country.maxLength);
    }

    const formatted = this.formatPhone(digits, country.format);
    input.value = formatted;
    this.phoneForm.get('number')?.setValue(formatted, { emitEvent: false });
    this.syncPhoneWithParentForm();
  }

  formatPhone(digits: string, format: number[]): string {
    if (!digits) return '';

    const chunks: string[] = [];
    let index = 0;
    for (let i = 0; i < format.length && index < digits.length; i++) {
      const endIndex = Math.min(index + format[i], digits.length);
      const chunk = digits.substring(index, endIndex);
      if (chunk) {
        chunks.push(chunk);
      }
      index = endIndex;
    }
    return chunks.join(' ');
  }

  get fullNumber(): string {
    const country = this.phoneForm.value.country;
    const number = this.phoneForm.value.number;
    return country && number 
      ? `${this.countryInfo[country].code} ${number}`
      : '';
  }
}
