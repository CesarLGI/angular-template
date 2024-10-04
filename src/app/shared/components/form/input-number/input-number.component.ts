import { Component, inject, input } from '@angular/core'
import { ControlContainer, ReactiveFormsModule } from '@angular/forms'
import { InputNumberModule } from 'primeng/inputnumber'
import { FormField } from '@core/models/classes/form-field.class'
import { FloatLabelModule } from 'primeng/floatlabel'

import { ValidatorComponent } from '../validator/validator.component'

@Component({
    selector: 'input-number',
    standalone: true,
    imports: [ReactiveFormsModule, InputNumberModule, FloatLabelModule, ValidatorComponent],
    templateUrl: './input-number.component.html',
    styleUrl: './input-number.component.scss',
    viewProviders: [
        {
            provide: ControlContainer,
            useFactory: () => inject(ControlContainer, { skipSelf: true }),
        },
    ],
})
export class InputNumberComponent extends FormField {
    isFloat = input<boolean>(false)
}
