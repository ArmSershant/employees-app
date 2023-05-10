import classNames from "classnames";
import styles from "./input.module.css";
import { IInput } from "../../types/input.type";

export default function Input(props: IInput) {
  const inputClass = classNames(
    styles.input,
    props.size === "small"
      ? styles.input_Small
      : (props.size === "medium"
          ? styles.input_Medium
          : props.size === "large"
          ? styles.input_Large
          : ""),
  );
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.myChange}
        className={inputClass}
      />
    </div>
  );
}
