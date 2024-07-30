import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import styles from "./Post.module.css";

type Props = {
  auhtor: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  publishedAt: Date;
  content: { type: string; content: string }[];
};

export function Post(props: Props) {
  const publishedDateFormated = format(
    props.publishedAt,
    "d 'de' LLLL 'às' HHmm'h'"
  );

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.auhtor.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.auhtor.name}</strong>
            <span>{props.auhtor.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormated}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.length > 0 &&
          props.content.map((row, index) => {
            if (row.type === "link") {
              return (
                <p key={index}>
                  <a href="#">{row.content}</a>
                </p>
              );
            }
            return <p key={index}>{row.content}</p>;
          })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder="Deixe o seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
