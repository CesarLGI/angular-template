import { Component, inject, input, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms'
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox'

import { ValidatorComponent } from '../validator/validator.component'
import { FormField } from '@core/models/classes/form-field.class'

@Component({
  selector: 'checkbox',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxModule, ValidatorComponent],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  viewProviders:[
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true}),
    }
  ]
})
export class CheckboxComponent extends FormField {
}
