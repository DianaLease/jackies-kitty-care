import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.credit}>
      <p className='small-text'>Illustrations by <a href="https://icons8.com/illustrations/author/eEbrZFlkyZbD" target='_blank'>Anna A</a> from <a href="https://icons8.com/illustrations" target='_blank'>Ouch!</a></p>
      </div>
      <p>Contact me: <a href='tel:9084923492'>908-492-3492</a> | <a href='mailto:katlicks@aol.com'>katlicks@aol.com</a></p>
    </footer>
  );
}
