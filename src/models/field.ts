export interface FieldObject {
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

export type FieldSet = (FieldObject | FieldObject[])[];
