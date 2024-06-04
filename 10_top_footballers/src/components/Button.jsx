import styles from "./Button.module.scss";

function Button({ clickHandler, data }) {
  return (
    <button className={styles.button} onClick={clickHandler}>
      {data.length > 0 ? "Clear All" : "Refresh"}
    </button>
  );
}

export default Button;
