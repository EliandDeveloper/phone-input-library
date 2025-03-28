# PhoneInputLib

PhoneInputLib is an Angular library for phone number input, allowing users to select a country and format the phone number according to the selected country. It is highly configurable and can be used in various environments such as dialogs, pages, forms, etc.

## Installation

To install this library, run:

```bash
npm install phone-input-lib
```

## Usage

### Importing the Module

To use the `PhoneInputComponent`, follow these steps:

1. Import the `PhoneInputLibModule` in your main module or the module where you want to use it:

```typescript
import { PhoneInputLibModule } from 'phone-input-lib';

@NgModule({
  imports: [
    PhoneInputLibModule.forRoot({
      defaultCountry: 'Venezuela',
      styles: {
        input: 'custom-input',
        select: 'custom-select',
        formField: 'custom-form-field'
      }
    })
  ]
})
export class AppModule { }
```

### Using the Component

2. Use the component in your templates:

```html
<form [formGroup]="form">
  <lib-phone-input [parentForm]="form"></lib-phone-input>
</form>
```

### Configuration

You can configure the library by passing an object to the `forRoot` method. The available options are:

- `defaultCountry`: The default country code to be selected.
- `styles`: An object to customize the styles of the component.

### Complete Example

#### Main Module

```typescript name=app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { AppComponent } from './app.component';
import { PhoneInputLibModule } from 'phone-input-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PhoneInputLibModule.forRoot({
      defaultCountry: 'Venezuela',
      styles: {
        input: 'custom-input',
        select: 'custom-select',
        formField: 'custom-form-field'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### Component

```typescript name=app.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form">
      <lib-phone-input [parentForm]="form"></lib-phone-input>
    </form>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      phone: ['']
    });
  }
}
```

## Development

To run a development server, execute:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build phone-input-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build phone-input-lib`, go to the dist folder `cd dist/phone-input-lib` and run `npm publish`.

## Running Unit Tests

Run `ng test phone-input-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further Help

To get more help on the Angular CLI, use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
