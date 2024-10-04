export interface MultipleRecordsResponse<T> {
    count: number
    data: T[]
    length: number
    start: number
}
