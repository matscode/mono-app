export interface ValidationError {
  rule: string;
  field: string;
  message: string
}

export interface SimpleValidationError {
  [key: string]: string
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  remember_me_token?: string;
  created_at?: string;
  updated_at?: string;
  fullName: string;
}
