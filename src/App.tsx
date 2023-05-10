import "./App.css";
import { Employee } from "./types/employee.type";
import employees from "./data/employees.json";
import Button from "./components/button/Button";
import { useEffect, useState } from "react";
import MyModal from "./components/modal/Modal";
import React from "react";

function App() {
  let headers = [
    "ID",
    "HeadID",
    "FullName",
    "Position",
    "City",
    "State",
    "Email",
    "Skype",
    "MobilePhone",
    "BirthDate",
    "HireDate",
  ];

  const [employeeList, setEmployeelist] = useState<Employee[]>([]);
  const [showModal, setShow] = useState(false);
  const [id, setId] = useState<number>(-1);
  const [name, setName] = useState<string>("");
  const [editEmployee, setEditEmployee] = useState<Employee>({
    ID: -1,
    HeadID: -1,
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
  const [sorted, setSorted] = useState<boolean>(false);

  const onAdd = (employee: Employee, name: string) => {
    setShow(true);
    setId(employee.ID);
    setName(name);
  };

  const onEdit = (employee: Employee, name: string) => {
    setShow(true);
    setEditEmployee(employee);
    setName(name);
  };

  const onClose = () => {
    setShow(false);
  };

  const handleAdd = (newEmployee: Employee) => {
    setEmployeelist([...employeeList, newEmployee]);
    onClose();
  };

  const handleEdit = (editedEmployee: Employee) => {
    const updatedEmployeeList = employeeList.map((employee) =>
      employee.ID === editedEmployee.ID ? editedEmployee : employee,
    );
    setEmployeelist(updatedEmployeeList);
    onClose();
  };

  const onDelete = (id: number) => {
    let existEmployee = employeeList.find((elm: Employee) => elm.ID === id);
    if (existEmployee) {
      employeeList?.splice(employeeList.indexOf(existEmployee), 1);
      setEmployeelist([...employeeList]);
    }
  };

  const onSort = (header: string) => {
    let sortedEmployeeList: Employee[];
    switch (header) {
      case "ID":
        if (!sorted) {
          sortedEmployeeList = employeeList.sort((a, b) => b.ID - a.ID);
          setEmployeelist([...sortedEmployeeList]);
          setSorted(true);
        } else {
          sortedEmployeeList = employeeList.sort((a, b) => a.ID - b.ID);
          setEmployeelist([...sortedEmployeeList]);
          setSorted(false);
        }
        break;
      case "HeadID":
        if (!sorted) {
          sortedEmployeeList = employeeList.sort(
            (a: any, b: any) => b.HeadID - a.HeadID,
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(true);
        } else {
          sortedEmployeeList = employeeList.sort(
            (a: any, b: any) => a.HeadID - b.HeadID,
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(false);
        }
        break;
      case "FullName":
        if (!sorted) {
          sortedEmployeeList = employeeList.sort((a, b) =>
            b.FullName.localeCompare(a.FullName),
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(true);
        } else {
          sortedEmployeeList = employeeList.sort((a, b) =>
            a.FullName.localeCompare(b.FullName),
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(false);
        }
        break;
      case "Position":
        if (!sorted) {
          sortedEmployeeList = employeeList.sort((a, b) =>
            b.Position.localeCompare(a.Position),
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(true);
        } else {
          sortedEmployeeList = employeeList.sort((a, b) =>
            a.Position.localeCompare(b.Position),
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(false);
        }
        break;
      case "City":
        if (!sorted) {
          sortedEmployeeList = employeeList.sort((a, b) =>
            b.City.localeCompare(a.City),
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(true);
        } else {
          sortedEmployeeList = employeeList.sort((a, b) =>
            a.City.localeCompare(b.City),
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(false);
        }
        break;
      case "State":
        if (!sorted) {
          sortedEmployeeList = employeeList.sort((a, b) =>
            b.State.localeCompare(a.State),
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(true);
        } else {
          sortedEmployeeList = employeeList.sort((a, b) =>
            a.State.localeCompare(b.State),
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(false);
        }
        break;
      case "Email":
        if (!sorted) {
          sortedEmployeeList = employeeList.sort((a, b) =>
            b.Email.localeCompare(a.Email),
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(true);
        } else {
          sortedEmployeeList = employeeList.sort((a, b) =>
            a.Email.localeCompare(b.Email),
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(false);
        }
        break;
      case "Skype":
        if (!sorted) {
          sortedEmployeeList = employeeList.sort((a, b) =>
            b.Skype.localeCompare(a.Skype),
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(true);
        } else {
          sortedEmployeeList = employeeList.sort((a, b) =>
            a.Skype.localeCompare(b.Skype),
          );
          setEmployeelist([...sortedEmployeeList]);
          setSorted(false);
        }
        break;
    }
  };

  useEffect(() => {
    setEmployeelist(employees);
  }, []);

  return (
    <>
      {/* <table className="container">
        <thead>
          <tr>
            {headers.map((header) => (
              <th onClick={() => onSort(header)} key={header}>
                {header}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee: Employee, index: number) => (
            <tr key={index}>
              <td>{employee.ID}</td>
              <td>{employee.HeadID}</td>
              <td>{employee.FullName}</td>
              <td>{employee.Position}</td>
              <td>{employee.City}</td>
              <td>{employee.State}</td>
              <td>{employee.Email}</td>
              <td>{employee.Skype}</td>
              <td>{employee.MobilePhone}</td>
              <td>{employee.BirthDate}</td>
              <td>{employee.HireDate}</td>
              <td>
                <Button
                  myClick={() => onAdd(employee, "Add")}
                  name="Add"
                  size="small"
                  type="primary"></Button>
                <Button
                  myClick={() => onEdit(employee, "Edit")}
                  name="Edit"
                  size="small"
                  type="secondary"></Button>
                <Button
                  myClick={() => onDelete(employee.ID)}
                  name="Delete"
                  size="small"
                  type="danger"></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* table 2 */}
      <table className="container">
        <thead>
          <tr>
            {headers.map((header) => (
              <th onClick={() => onSort(header)} key={header}>
                {header}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee: Employee, index: number) => (
            <React.Fragment key={index}>
              <tr className="headEmployee-row">
                <td>
                  <div>{employee.ID}</div>
                </td>
                <td>
                  <div>{employee.HeadID}</div>
                </td>
                <td>
                  <div>{employee.FullName}</div>
                </td>
                <td>
                  <div>{employee.Position}</div>
                </td>
                <td>
                  <div>{employee.City}</div>
                </td>
                <td>
                  <div>{employee.State}</div>
                </td>
                <td>
                  <div>{employee.Email}</div>
                </td>
                <td>
                  <div>{employee.Skype}</div>
                </td>
                <td>
                  <div>{employee.MobilePhone}</div>
                </td>
                <td>
                  <div>{employee.BirthDate}</div>
                </td>
                <td>
                  <div>{employee.HireDate}</div>
                </td>
                <td>
                  <Button
                    myClick={() => onAdd(employee, "Add")}
                    name="Add"
                    size="small"
                    type="primary"></Button>
                  <Button
                    myClick={() => onEdit(employee, "Edit")}
                    name="Edit"
                    size="small"
                    type="secondary"></Button>
                  <Button
                    myClick={() => onDelete(employee.ID)}
                    name="Delete"
                    size="small"
                    type="danger"></Button>
                </td>
              </tr>
              {employeeList
                .filter((subordinate) => subordinate.HeadID === employee.ID)
                .map((subordinate, subIndex) => (
                  <tr
                    key={`${index}-${subordinate.ID}`}
                    className="subordinate-row">
                    <td>
                      <div>{subordinate.ID}</div>
                    </td>
                    <td>
                      <div>{subordinate.HeadID}</div>
                    </td>
                    <td>
                      <div>{subordinate.FullName}</div>
                    </td>
                    <td>
                      <div>{subordinate.Position}</div>
                    </td>
                    <td>
                      <div>{subordinate.City}</div>
                    </td>
                    <td>
                      <div>{subordinate.State}</div>
                    </td>
                    <td>
                      <div>{subordinate.Email}</div>
                    </td>
                    <td>
                      <div>{subordinate.Skype}</div>
                    </td>
                    <td>
                      <div>{subordinate.MobilePhone}</div>
                    </td>
                    <td>
                      <div>{subordinate.BirthDate}</div>
                    </td>
                    <td>
                      <div>{subordinate.HireDate}</div>
                    </td>
                    <td>
                      <Button
                        myClick={() => onAdd(subordinate, "Add")}
                        name="Add"
                        size="small"
                        type="primary"></Button>
                      <Button
                        myClick={() => onEdit(subordinate, "Edit")}
                        name="Edit"
                        size="small"
                        type="secondary"></Button>
                      <Button
                        myClick={() => onDelete(subordinate.ID)}
                        name="Delete"
                        size="small"
                        type="danger"></Button>
                    </td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {showModal && (
        <MyModal
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          id={id}
          name={name}
          editEmployee={editEmployee}
          onClose={onClose}
        />
      )}
    </>
  );
}

export default App;

