import { Injectable } from '@angular/core'
import { BaseApi } from '@core/models/classes/base-api.class'
import { UserModel } from '@shared/models/interfaces/user.interface'

@Injectable({
    providedIn: 'root',
})
export class UsersService extends BaseApi<UserModel> {
    protected override pathName = 'users'
}
