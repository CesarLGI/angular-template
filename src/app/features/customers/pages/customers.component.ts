import { Component, inject, OnInit } from '@angular/core'
import { ButtonModule } from 'primeng/button'

import { CrudTable } from '@core/models/classes/crud-table.class'
import { CustomerModel } from '@shared/models/interfaces/customer.interface'
import { CustomersService } from '@shared/services/customers.service'
import { CustomerModalComponent } from '../components/customer-modal/customer-modal.component'

@Component({
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './customers.component.html',
    styleUrl: './customers.component.scss',
})
export class CustomersComponent extends CrudTable<CustomerModel> implements OnInit {
    api = inject(CustomersService)
    protected override modalComponent = CustomerModalComponent
    override entityName: string = 'Customer'

    ngOnInit(): void {
        this.getRecords()
    }
}
