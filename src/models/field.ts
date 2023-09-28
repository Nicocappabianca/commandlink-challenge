import { HTMLInputTypeAttribute } from "react";

export interface FieldObject {
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

export type FieldSet = (FieldObject | FieldObject[])[];
