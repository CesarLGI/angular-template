import { Component, inject, input } from '@angular/core'
import { ControlContainer, ReactiveFormsModule } from '@angular/forms'
import { FormField } from '@core/models/classes/form-field.class'
import { DropdownModule } from 'primeng/dropdown'
import { FloatLabelModule } from 'primeng/floatlabel'

import { ValidatorComponent } from '../validator/validator.component'

@Component({
    selector: 'dropdown',
    standalone: true,
    imports: [ReactiveFormsModule, DropdownModule, FloatLabelModule, ValidatorComponent],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss',
    viewProviders: [
        {
            provide: ControlContainer,
            useFactory: () => inject(ControlContainer, { skipSelf: true }),
        },
    ],
})
export class DropdownComponent extends FormField {
    filter = input<boolean>(false)
    filterBy = input<string>('')
    isFloat = input<boolean>(false)
    optionLabel = input.required<string>()
    options = input<any[]>()
    optionValue = input.required<string>()
}
