import styles from "./step.module.css";

export default function Step({
  stepNumber,
  title,
  children,
  onToggle,
  activeStep,
}) {
  return (
    <div
      className={`${styles.step} ${
        stepNumber === activeStep ? styles.active : ""
      } common-border-radius common-shadow`}
    >
      <div className={styles.top}>
        <div className={styles.titleContainer}>
          <div className={styles.number}>{stepNumber}</div>
          <div className={styles.title}>{title}</div>
        </div>

        <button
          onClick={() => onToggle(stepNumber)}
          className={`${styles.toggle}`}
        >
          <img
            src={`icons/${stepNumber === activeStep ? "minus" : "plus"}.svg`}
            alt="toggle"
          />
        </button>
      </div>

      <div className={styles.bot}>
        <p className={styles.stepInfo}>{children}</p>
      </div>
    </div>
  );
}
