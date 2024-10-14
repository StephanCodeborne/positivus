import styles from "../hero.module.css";

export default function Sponsors() {
  return (
    <div className={styles.autoScroll}>
      <div className={styles.sponsors}>
        <a href="#">
          <img src="images/amazon.svg" alt="amazon" />
        </a>
        <a href="#">
          <img src="images/dribbble.svg" alt="dribbble" />
        </a>
        <a href="#">
          <img src="images/hubspot.svg" alt="HubSpot" />
        </a>
        <a href="#">
          <img src="images/notion.svg" alt="Notion" />
        </a>
        <a href="#">
          <img src="images/netflix.svg" alt="Netflix" />
        </a>
        <a href="#">
          <img src="images/zoom.svg" alt="Zoom" />
        </a>
      </div>
      <div className={`${styles.sponsors} ${styles.absolute}`}>
        <a href="#">
          <img src="images/amazon.svg" alt="amazon" />
        </a>
        <a href="#">
          <img src="images/dribbble.svg" alt="dribbble" />
        </a>
        <a href="#">
          <img src="images/hubspot.svg" alt="HubSpot" />
        </a>
        <a href="#">
          <img src="images/notion.svg" alt="Notion" />
        </a>
        <a href="#">
          <img src="images/netflix.svg" alt="Netflix" />
        </a>
        <a href="#">
          <img src="images/zoom.svg" alt="Zoom" />
        </a>
      </div>
    </div>
  );
}
