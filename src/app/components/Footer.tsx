import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Contact me: <a href='tel:9084923492'>908-492-3492</a> | <a href='mailto:katlicks@aol.com'>katlicks@aol.com</a></p>
    </footer>
  );
}
