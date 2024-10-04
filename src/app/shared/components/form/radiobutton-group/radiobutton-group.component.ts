import { Component, inject, input } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms'
import { RadioButtonModule } from 'primeng/radiobutton'

import { ValidatorComponent } from '../validator/validator.component'
import { FieldGroupOption } from '@shared/models/types/field-group-option'
import { FormField } from '@core/models/classes/form-field.class'

@Component({
  selector: 'radiobutton-group',
  standalone: true,
  imports: [ReactiveFormsModule, RadioButtonModule, ValidatorComponent], 
  templateUrl: './radiobutton-group.component.html',
  styleUrl: './radiobutton-group.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true}),
    }
  ]
})
export class RadiobuttonGroupComponent extends FormField {
  options = input.required<FieldGroupOption[]>()
}
