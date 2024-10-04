import { Component, inject, input } from '@angular/core'
import { FloatLabelModule } from 'primeng/floatlabel'
import { InputMaskModule } from 'primeng/inputmask'
import { ValidatorComponent } from '../validator/validator.component'
import { ControlContainer, ReactiveFormsModule } from '@angular/forms'
import { FormField } from '@core/models/classes/form-field.class'

@Component({
    selector: 'input-mask',
    standalone: true,
    imports: [ReactiveFormsModule, InputMaskModule, FloatLabelModule, ValidatorComponent],
    templateUrl: './input-mask.component.html',
    styleUrl: './input-mask.component.scss',
    viewProviders: [
        {
            provide: ControlContainer,
            useFactory: () => inject(ControlContainer, { skipSelf: true }),
        },
    ],
})
export class InputMaskComponent extends FormField {
    isFloat = input<boolean>(false)
    mask = input.required<string>()
}
