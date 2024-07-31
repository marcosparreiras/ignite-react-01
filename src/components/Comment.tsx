import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import type React from "react";
import { useState } from "react";

type Props = {
  content: string;
  onDeleteComment: (comment: string) => void;
};

export function Comment(props: Props) {
  const [likeCount, setLikeCount] = useState<number>(0);

  function handleLikeComment(_event: React.MouseEvent<HTMLButtonElement>) {
    setLikeCount((previous) => previous + 1);
  }

  function handleDelete(_event: React.MouseEvent<HTMLButtonElement>) {
    props.onDeleteComment(props.content);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/marcosparreiras.png" disableOutline />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos Parreiras</strong>
              <time
                title="29 de Julho às 23:28h"
                dateTime="2024-07-29 23:28:03"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDelete} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{props.content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
