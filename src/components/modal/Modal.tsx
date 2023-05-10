import ReactModal from "react-modal";
import { useState } from "react";
import { Employee } from "../../types/employee.type";
import styles from "./modal.module.css";
import Button from "../button/Button";
import Input from "../input/Input";
import { IModal } from "../../types/modal.types";

export default function MyModal(props: IModal) {
  const [newEmployee, setNewEmployee] = useState<Employee>({
    ID: Math.floor(Math.random() * 200),
    HeadID: props.id,
    FullName: "",
    Position: "",
    City: "",
    State: "",
    Email: "",
    Skype: "",
    MobilePhone: "",
    BirthDate: "",
    HireDate: "",
  });

  const [editedEmployee, setEditedEmployee] = useState<Employee>({
    ID: props.editEmployee.ID,
    HeadID: props.editEmployee.HeadID,
    FullName: props.editEmployee.FullName,
    Position: props.editEmployee.Position,
    City: props.editEmployee.City,
    State: props.editEmployee.State,
    Email: props.editEmployee.Email,
    Skype: props.editEmployee.Skype,
    MobilePhone: props.editEmployee.MobilePhone,
    BirthDate: props.editEmployee.BirthDate,
    HireDate: props.editEmployee.HireDate,
  });

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={props.onClose}
      ariaHideApp={false}
      style={customStyles}
      contentLabel={props.name}>
      <h2>{props.name} Employee</h2>
      <Button
        name="Close"
        type="danger"
        size="small"
        myClick={props.onClose}></Button>
      <form className={styles.form}>
        <Input
          name="fullname"
          type="text"
          size="medium"
          placeholder="Full Name"
          value={props.name === "Edit" ? editedEmployee.FullName : undefined}
          myChange={
            props.name === "Add"
              ? (e) =>
                  setNewEmployee({ ...newEmployee, FullName: e.target.value })
              : (e) =>
                  setEditedEmployee({
                    ...editedEmployee,
                    FullName: e.target.value,
                  })
          }
        />
        <Input
          name="position"
          type="text"
          size="medium"
          placeholder="Position"
          value={props.name === "Edit" ? editedEmployee.Position : undefined}
          myChange={
            props.name === "Add"
              ? (e) =>
                  setNewEmployee({ ...newEmployee, Position: e.target.value })
              : (e) =>
                  setEditedEmployee({
                    ...editedEmployee,
                    Position: e.target.value,
                  })
          }
        />
        <Input
          name="city"
          type="text"
          size="medium"
          placeholder="City"
          value={props.name === "Edit" ? editedEmployee.City : undefined}
          myChange={
            props.name === "Add"
              ? (e) => setNewEmployee({ ...newEmployee, City: e.target.value })
              : (e) =>
                  setEditedEmployee({
                    ...editedEmployee,
                    City: e.target.value,
                  })
          }
        />
        <Input
          name="state"
          type="text"
          size="medium"
          placeholder="State"
          value={props.name === "Edit" ? editedEmployee.State : undefined}
          myChange={
            props.name === "Add"
              ? (e) => setNewEmployee({ ...newEmployee, State: e.target.value })
              : (e) =>
                  setEditedEmployee({
                    ...editedEmployee,
                    State: e.target.value,
                  })
          }
        />
        <Input
          name="email"
          type="email"
          size="medium"
          placeholder="Email"
          value={props.name === "Edit" ? editedEmployee.Email : undefined}
          myChange={
            props.name === "Add"
              ? (e) => setNewEmployee({ ...newEmployee, Email: e.target.value })
              : (e) =>
                  setEditedEmployee({
                    ...editedEmployee,
                    Email: e.target.value,
                  })
          }
        />
        <Input
          name="skype"
          type="text"
          size="medium"
          placeholder="Skype"
          value={props.name === "Edit" ? editedEmployee.Skype : undefined}
          myChange={
            props.name === "Add"
              ? (e) => setNewEmployee({ ...newEmployee, Skype: e.target.value })
              : (e) =>
                  setEditedEmployee({
                    ...editedEmployee,
                    Skype: e.target.value,
                  })
          }
        />
        <Input
          name="mobilephone"
          type="text"
          size="medium"
          placeholder="Mobile Phone"
          value={props.name === "Edit" ? editedEmployee.MobilePhone : undefined}
          myChange={
            props.name === "Add"
              ? (e) =>
                  setNewEmployee({
                    ...newEmployee,
                    MobilePhone: e.target.value,
                  })
              : (e) =>
                  setEditedEmployee({
                    ...editedEmployee,
                    MobilePhone: e.target.value,
                  })
          }
        />
        <Input
          name="birthdate"
          type="text"
          size="medium"
          placeholder="Birth Date"
          value={props.name === "Edit" ? editedEmployee.BirthDate : undefined}
          myChange={
            props.name === "Add"
              ? (e) =>
                  setNewEmployee({
                    ...newEmployee,
                    BirthDate: e.target.value,
                  })
              : (e) =>
                  setEditedEmployee({
                    ...editedEmployee,
                    BirthDate: e.target.value,
                  })
          }
        />
        <Input
          name="hiredate"
          type="text"
          size="medium"
          placeholder="Hire Date"
          value={props.name === "Edit" ? editedEmployee.HireDate : undefined}
          myChange={
            props.name === "Add"
              ? (e) =>
                  setNewEmployee({ ...newEmployee, HireDate: e.target.value })
              : (e) =>
                  setEditedEmployee({
                    ...editedEmployee,
                    HireDate: e.target.value,
                  })
          }
        />
        <Button
          name={props.name}
          type="primary"
          size="medium"
          myClick={(e) => {
            e.preventDefault();
            if (props.name === "Add") props.handleAdd(newEmployee);
            else props.handleEdit(editedEmployee);
          }}></Button>
      </form>
    </ReactModal>
  );
}
