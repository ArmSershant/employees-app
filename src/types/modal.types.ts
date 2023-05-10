import { MouseEventHandler } from "react";
import { Employee } from "./employee.type";

export interface IModal {
  id: number;
  name: string;
  editEmployee: Employee;
  onClose: MouseEventHandler<HTMLButtonElement>;
  handleAdd: Function;
  handleEdit: Function;
}
