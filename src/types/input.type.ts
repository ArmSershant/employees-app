import { ChangeEventHandler } from "react";

export interface IInput {
  name?: string;
  size?: string;
  placeholder?: string;
  required?: boolean;
  value?: string | number | readonly string[] | undefined;
  type: string;
  myChange:ChangeEventHandler<HTMLInputElement>
}
