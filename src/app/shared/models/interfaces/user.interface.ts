export interface UserModel {
    createdAt?: string
    createdBy?: string
    email: string
    firstName: string
    lastName: string
    password?: string
    picture?: string
    pictureId?: number
    userId: number
    roleId?: number
}
