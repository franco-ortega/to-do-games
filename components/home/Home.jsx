import styles from './Home.module.scss';

export default function Home() {
  return (
    <main className={styles.Home}>
      <h2>Home Page</h2>
      <section>
        <h3>Section #1</h3>
      </section>
      <section>
        <h3>Section #2</h3>
      </section>
      <section>
        <h3>Section #3</h3>
      </section>
    </main>
  );
}
