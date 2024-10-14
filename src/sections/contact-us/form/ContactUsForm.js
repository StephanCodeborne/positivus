import Button from "../../../components/button/Button";
import styles from "../contact-us.module.css";
import { useState } from "react";

export default function ContactUsForm() {
  const [activeRadio, setActiveRadio] = useState("say hi");
  return (
    <form>
      <div className={styles.radios}>
        <label className={styles.radio}>
          <button
            type="button"
            onClick={() => setActiveRadio("say hi")}
            role="radio"
            aria-checked={activeRadio === "say hi" && true}
          >
            {activeRadio === "say hi" && (
              <span className={styles.circle}></span>
            )}
          </button>
          <p className={styles.caption}>Say Hi</p>
        </label>
        <label className={styles.radio}>
          <button
            type="button"
            onClick={() => setActiveRadio("get quote")}
            role="radio"
            aria-checked={activeRadio === "get quote" && true}
          >
            {activeRadio === "get quote" && (
              <span className={styles.circle}></span>
            )}
          </button>
          <p className={styles.caption}>Get a Quote</p>
        </label>
      </div>

      <div className={styles.fields}>
        <label className={styles.field}>
          <span className={styles.title}>Name</span>
          <input type="text" placeholder="Name" />
        </label>
        <label className={styles.field}>
          <span className={styles.title}>Email</span>
          <input type="email" placeholder="Email" required />
        </label>
        <label className={styles.field}>
          <span className={styles.title}>Message</span>
          <textarea style={null} placeholder="Message" required></textarea>
        </label>
      </div>

      <Button isFilled={true} className={styles.send} type="submit">
        Send Message
      </Button>
    </form>
  );
}
