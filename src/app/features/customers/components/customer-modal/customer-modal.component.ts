import { JsonPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

import { CrudModal } from '@core/models/classes/crud-modal.class'
import { CustomerModel } from '@shared/models/interfaces/customer.interface'
import { CustomersService } from '@shared/services/customers.service'
import { InputTextComponent } from '@shared/components/form/input-text/input-text.component'
import { InputNumberComponent } from '@shared/components/form/input-number/input-number.component'
import { DropdownComponent } from '@shared/components/form/dropdown/dropdown.component'
import { InputTextAreaComponent } from '@shared/components/form/input-text-area/input-text-area.component'
import { InputMaskComponent } from '@shared/components/form/input-mask/input-mask.component'
import { CheckboxComponent } from '@shared/components/form/checkbox/checkbox.component'
import { FieldGroupOption } from '@shared/models/types/field-group-option'
import { CheckboxGroupComponent } from '@shared/components/form/checkbox-group/checkbox-group.component'
import { MultiSelectComponent } from '../../../../shared/components/form/multi-select/multi-select.component'
import { RadiobuttonGroupComponent } from '@shared/components/form/radiobutton-group/radiobutton-group.component'

@Component({
    selector: 'customer-modal',
    standalone: true,
    imports: [
        ButtonModule,
        JsonPipe,
        ReactiveFormsModule,
        InputTextComponent,
        InputNumberComponent,
        DropdownComponent,
        InputTextAreaComponent,
        InputMaskComponent,
        CheckboxComponent,
        CheckboxGroupComponent,
        MultiSelectComponent,
        RadiobuttonGroupComponent,
    ],
    templateUrl: './customer-modal.component.html',
    styleUrl: './customer-modal.component.scss',
})
export class CustomerModalComponent extends CrudModal<CustomerModel> {
    api = inject(CustomersService)
    cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
    ]

    roles = [
        { name: 'Admin', id: '1' },
        { name: 'User', id: '2' },
        { name: 'Manager', id: '3' },
    ]
    mappedRoles = this.roles.map((role) => ({ label: role.name, value: role.id } as FieldGroupOption))

    formGroup = new FormGroup({
        customerId: new FormControl(this.data?.customerId || null),
        name: new FormControl(this.data?.name || '', Validators.required),
        internalId: new FormControl(this.data?.internalId || null, Validators.required),
        address: new FormControl(this.data?.address || '', Validators.required),
        city: new FormControl(this.data?.city || '', Validators.required),
        phone: new FormControl(this.data?.phone || '', Validators.required),
        test: new FormControl(null, Validators.required),
        cityId: new FormControl(null, Validators.required),
        roleIds: new FormControl([], [Validators.required, Validators.minLength(2)]),
        isAdmin: new FormControl(false, Validators.requiredTrue),
        cityMulti: new FormControl(null, Validators.required),
        favRole: new FormControl(null, Validators.required),
    })
}
