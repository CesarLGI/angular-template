import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DestroyRef, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { environment } from '@environments/environment'

import { MultipleRecordsResponse } from '../interfaces/multiple-record-response.interface'
import { PaginatedList } from '../types/paginated-list.type'
import { SingleRecordResponse } from '../interfaces/single-record-response.interface'

export abstract class BaseApi<T> {
    protected httpClient = inject(HttpClient)
    protected destroyRef = inject(DestroyRef)
    private apiUrl = environment.apiUrl
    private headers = new HttpHeaders({ 'Content-type': 'application/json' })
    protected pathName: string = ''

    getPaginatedList({ start = 0, length = 0, query }: PaginatedList) {
        const url = `${this.apiUrl}${this.pathName}?start=${start}&length=${length}${query ? '&query=' + query : ''}`
        return this.httpClient.get<MultipleRecordsResponse<T>>(url, { headers: this.headers }).pipe(takeUntilDestroyed(this.destroyRef))
    }

    getById(id: number) {
        const url = `${this.apiUrl}${this.pathName}/${id}`
        return this.httpClient.get<SingleRecordResponse<T>>(url, { headers: this.headers }).pipe(takeUntilDestroyed(this.destroyRef))
    }

    update<ReqType = T, ResType = T>(data: ReqType, id: number) {
        const url = `${this.apiUrl}${this.pathName}/${id}`
        const body = JSON.stringify(data)
        return this.httpClient.put<SingleRecordResponse<ResType>>(url, body, { headers: this.headers })
    }

    create<ReqType = T, ResType = T>(data: ReqType) {
        const url = `${this.apiUrl}${this.pathName}`
        const body = JSON.stringify(data)
        return this.httpClient.post<SingleRecordResponse<ResType>>(url, body, { headers: this.headers })
    }

    delete(id: number) {
        const url = `${this.apiUrl}${this.pathName}/${id}`
        return this.httpClient.delete(url, { headers: this.headers })
    }
}
