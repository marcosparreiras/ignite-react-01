import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/marcosparreiras.png" />
          <div className={styles.authorInfo}>
            <strong>Marcos Parreiras</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="29 de Julho às 23:28h" dateTime="2024-07-29 23:28:03">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          pariatur officiis ab deleniti ducimus illum dolor rem tempore debitis
          expedita, molestias possimus culpa. Eius expedita laborum omnis
          accusantium, doloribus iusto!
        </p>
        <p>
          <a href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </a>
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </article>
  );
}
