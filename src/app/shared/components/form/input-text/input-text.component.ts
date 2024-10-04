import { Component, inject, input } from '@angular/core'
import { ControlContainer, ReactiveFormsModule } from '@angular/forms'
import { FormField } from '@core/models/classes/form-field.class'
import { FloatLabelModule } from 'primeng/floatlabel'
import { InputTextModule } from 'primeng/inputtext'

import { ValidatorComponent } from '../validator/validator.component'

@Component({
    selector: 'input-text',
    standalone: true,
    imports: [ReactiveFormsModule, InputTextModule, FloatLabelModule, ValidatorComponent],
    templateUrl: './input-text.component.html',
    styleUrl: './input-text.component.scss',
    viewProviders: [
        {
            provide: ControlContainer,
            useFactory: () => inject(ControlContainer, { skipSelf: true }),
        },
    ],
})
export class InputTextComponent extends FormField {
    isFloat = input<boolean>(false)
}
