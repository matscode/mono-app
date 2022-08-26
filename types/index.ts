export interface ValidationError {
  rule: string;
  field: string;
  message: string
}

export interface SimpleValidationError {
  [key: string]: string
}