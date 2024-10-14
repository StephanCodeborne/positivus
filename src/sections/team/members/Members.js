import styles from "./members.module.css";

export default function Members({ members }) {
  return (
    <ul className={styles.members}>
      {members.map(({ fullName, ocupation, linkedIn, bio, photo }) => (
        <MemberCard
          name={fullName}
          ocupation={ocupation}
          bio={bio}
          photo={photo}
          linkedIn={linkedIn}
        />
      ))}
    </ul>
  );
}

function MemberCard({ name, ocupation, bio, linkedIn, photo }) {
  return (
    <li className={`${styles.card} common-shadow common-border-radius`}>
      <div className={styles.memberInfo}>
        <div className={styles.photoContainer}>
          <div
            style={{ backgroundImage: `url(${photo})` }}
            className={styles.photo}
          ></div>
          <div className={`${styles.photo} ${styles.absolute}`}></div>
        </div>
        <div className={styles.text}>
          <h4>{name}</h4>
          <p className={styles.ocupation}>{ocupation}</p>
        </div>

        <a className={styles.linkedIn} href={linkedIn}>
          <img src="icons/dark-green-linkedin.svg" alt="linkedIn" />
        </a>
      </div>

      <div className={styles.bio}>
        <p>{bio}</p>
      </div>
    </li>
  );
}
