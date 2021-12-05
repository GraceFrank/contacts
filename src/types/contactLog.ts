export interface IContactEdit {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}

export interface IContactLog {
  from: IContactEdit
  to: IContactEdit
}

export enum ContactLogStatus {
  CREATED = 'created',
  UPDATED = 'updated'
}
