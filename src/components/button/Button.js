import styles from "./button.module.css";

export default function Button({
  isFilled = false,
  className = "",
  onClick,
  type = "button",
  href = "#",
  children,
}) {
  return (
    <button
      className={`${className} ${styles.button} ${
        isFilled ? styles.filled : ""
      }`}
      type={type}
      onClick={onClick}
    >
      <a href={href}>{children}</a>
    </button>
  );
}
