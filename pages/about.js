import React from 'react'; // 👈 add this
import styles from './page.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>About Alpha Corp.</p>
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Powered By Helios
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <div style={{ maxWidth: 1000 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          {/* rest of content */}
        </div>
      </div>

      <div className={styles.grid}>
        <a href="/" className={styles.card} rel="noopener noreferrer">
          <h2>Home</h2>
          <p>Back to the home page.</p>
        </a>
      </div>
    </main>
  );
}

