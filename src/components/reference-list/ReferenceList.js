import styles from "./reference-list.module.css";

export default function ReferenceList({ className, list }) {
  return (
    <ul className={`${styles.list} ${className} common-border-radius`}>
      {list.map((ref) => (
        <Reference key={ref.id} href={ref.href}>
          {ref.description}
        </Reference>
      ))}
    </ul>
  );
}

function Reference({ className, children, href }) {
  return (
    <li className={className}>
      <div className={styles.refContainer}>
        <p>{children}</p>
        <a className={styles.link} href={href}>
          Learn More
          <span className={styles.arrow}>
            <img src="icons/green-arrow.svg" alt="arrow" />
          </span>
        </a>
      </div>
    </li>
  );
}
