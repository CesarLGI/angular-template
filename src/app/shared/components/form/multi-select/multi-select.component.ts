import { Component, inject, input } from '@angular/core'
import { ControlContainer, ReactiveFormsModule } from '@angular/forms'
import { MultiSelectModule } from 'primeng/multiselect'
import { FloatLabelModule } from 'primeng/floatlabel'
import { FormField } from '@core/models/classes/form-field.class'
import { ValidatorComponent } from '../validator/validator.component'

@Component({
    selector: 'multi-select',
    standalone: true,
    imports: [ReactiveFormsModule, FloatLabelModule, MultiSelectModule, ValidatorComponent],
    templateUrl: './multi-select.component.html',
    styleUrl: './multi-select.component.scss',
    viewProviders: [
        {
            provide: ControlContainer,
            useFactory: () => inject(ControlContainer, { skipSelf: true }),
        },
    ],
})
export class MultiSelectComponent extends FormField {
    isFloat = input<boolean>(false)
    optionLabel = input.required<string>()
    options = input<any[]>()
    optionValue = input.required<string>()
    filter = input<boolean>(false)
    filterBy = input<string>('')
}
