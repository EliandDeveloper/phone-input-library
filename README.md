
# Phone Input Library Documentation


The **Phone Input Library** is an Angular component that provides international phone number input capabilities with country selection and automatic formatting. This library enables developers to easily integrate standardized phone number input forms into their Angular applications.

## Features

- **Country Selection**: Dropdown menu with country names and their dialing codes  
- **Automatic Formatting**: Phone numbers are automatically formatted based on the selected country's pattern  
- **Validation**: Built-in validation for minimum length requirements based on country standards  
- **Internationalization**: Support for countries across North America, South America, Europe, and Asia-Pacific  
- **Customizable Styling**: CSS variables allow for easy theming and integration with your application  
- **Responsive Design**: Mobile-friendly layout that adapts to screen size  
- **Shadow DOM Encapsulation**: Styles remain isolated from the rest of your application  

## Installation

```bash
npm install @eliandsantos/phone-input-lib
```

## Requirements

This library requires the following peer dependencies:

- Angular 18.2.0 or higher  
- Angular Material  

## Basic Usage

### Import the Module

```ts
import { PhoneInputLibModule } from '@eliandsantos/phone-input-lib';

@NgModule({
  imports: [
    PhoneInputLibModule.forRoot({
      defaultCountry: 'Venezuela'
    })
  ]
})
export class AppModule { }
```

### Use in Template

```html
<form [formGroup]="myForm">
  <lib-phone-input [parentForm]="myForm"></lib-phone-input>
</form>
```

### Form Setup

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.html'
})
export class MyComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      phone: ['', Validators.required]
    });
  }
}
```

## Configuration

### Module Configuration

The `forRoot` method accepts a configuration object:

```ts
PhoneInputLibModule.forRoot({
  defaultCountry: 'USA',
  countryInfo: { /* Custom country definitions */ }
});
```

### Configuration Options

| Option           | Type                            | Description                          | Default       |
|------------------|----------------------------------|--------------------------------------|---------------|
| `defaultCountry` | `string`                         | The country to be pre-selected       | `'Venezuela'` |
| `countryInfo`    | `Record<string, CountryInfo>`   | Custom country definitions           | Built-in list |

## Styling Customization

The component uses CSS variables that can be overridden in your application:

```css
lib-phone-input {
  --phone-input-gap: 20px;
  --phone-input-country-width: 50%;
  --phone-input-number-width: 50%;
  --phone-input-font-size: 16px;
  --phone-input-focus-color: #ff5722;
  --phone-input-dark-focus-color: #ff8a65;
  --phone-input-prefix-margin: 0 10px 0 10px;
}
```

### Available CSS Variables

| Variable                          | Description                               | Default         |
|----------------------------------|-------------------------------------------|------------------|
| `--phone-input-gap`              | Gap between country and number inputs     | `15px`           |
| `--phone-input-country-width`    | Width of the country select field         | `65%`            |
| `--phone-input-number-width`     | Width of the phone number input field     | `65%`            |
| `--phone-input-font-size`        | Font size for the country code prefix     | `14px`           |
| `--phone-input-focus-color`      | Color for the focused input outline       | `#3f51b5`         |
| `--phone-input-dark-focus-color` | Color for the focused input in dark theme | `#7986cb`        |
| `--phone-input-prefix-margin`    | Margin around the country code prefix     | `0 15px 0 15px`  |

## Additional Exported Components

### Pipes

#### `InternationalPhonePipe`

Formats a phone number with the country code:

```html
{{ phoneNumber | internationalPhone:countryKey }}
```

#### `PhonePrefixPipe`

Gets the prefix code for a country:

```html
{{ countryKey | phonePrefix }}
```

### Validators

#### `phoneMinLengthValidator`

Validates if a phone number has the minimum required digits for a specific country:

```ts
import { phoneMinLengthValidator } from '@eliandsantos/phone-input-lib';

const validators = [
  phoneMinLengthValidator('USA')
];
```

## Supported Countries

The library includes pre-defined formats for countries in:

- **North America**: USA, Canada, Mexico  
- **South America**: Venezuela, Colombia, Argentina, etc.  
- **Europe**: Spain, France, Germany, etc.  
- **Asia-Pacific**: India, China, Japan, etc.  

## Browser Compatibility

The library uses Shadow DOM for style encapsulation, which is supported by all modern browsers.

