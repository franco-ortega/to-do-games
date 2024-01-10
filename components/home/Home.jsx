import styles from './Home.module.scss';

export default function Home() {
  return (
    <main className={styles.Home}>
      <h2>Home Page</h2>
      <section>
        <h2>Section #1</h2>
      </section>
      <section>
        <h2>Section #2</h2>
      </section>
      <section>
        <h2>Section #3</h2>
      </section>
    </main>
  );
}
