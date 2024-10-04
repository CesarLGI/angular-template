import { Injectable } from '@angular/core'
import { BaseApi } from '@core/models/classes/base-api.class'
import { CustomerModel } from '@shared/models/interfaces/customer.interface'

@Injectable({
    providedIn: 'root',
})
export class CustomersService extends BaseApi<CustomerModel> {
    protected override pathName = 'customers'
}
