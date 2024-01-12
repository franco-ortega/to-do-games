import styles from './Home.module.scss';

export default function Home() {
  return (
    <main className={styles.Home}>
      <h2>Home Page</h2>
      <section>
        The links for This Week, This Month, and This Year now dynamically
        display sample data.
      </section>
    </main>
  );
}
