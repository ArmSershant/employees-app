import classNames from "classnames";
import styles from "./button.module.css";
import { IButton } from "../../types/button.type";

export default function Button(props: IButton) {
  const buttonClass = classNames(
    styles.btn,
    props.type === "secondary"
      ? styles.btn_secondary
      : props.type === "primary"
      ? styles.btn_primary
      : props.type === "danger"
      ? styles.btn_danger
      : "",
    props.size === "small"
      ? styles.btn_small
      : props.size === "medium"
      ? styles.btn_medium
      : "",
  );
  return (
    <button onClick={props.myClick} className={buttonClass}>
      {props.name}
    </button>
  );
}
