import { Component, inject, input } from '@angular/core'
import { ControlContainer, ReactiveFormsModule } from '@angular/forms'
import { FormField } from '@core/models/classes/form-field.class'
import { CheckboxModule } from 'primeng/checkbox'

import { ValidatorComponent } from '../validator/validator.component'
import { FieldGroupOption } from '@shared/models/types/field-group-option'

@Component({
    selector: 'checkbox-group',
    standalone: true,
    imports: [ReactiveFormsModule, CheckboxModule, ValidatorComponent],
    templateUrl: './checkbox-group.component.html',
    styleUrl: './checkbox-group.component.scss',
    viewProviders: [
      {
        provide: ControlContainer,
        useFactory: () => inject(ControlContainer, {skipSelf: true}),
      }
    ]
})
export class CheckboxGroupComponent extends FormField {
    options = input.required<FieldGroupOption[]>()
}
