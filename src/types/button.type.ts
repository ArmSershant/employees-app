import { MouseEventHandler } from "react";
import { Employee } from "./employee.type";

export interface IButton {
  children?: string;
  type?: string;
  size?: string;
  name?: string;
  employee?: Employee;
  employees?: Employee[];
  myClick: MouseEventHandler<HTMLButtonElement>;
}
