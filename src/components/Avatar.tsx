import styles from "./Avatar.module.css";

type Props = {
  src: string;
  disableOutline?: boolean;
};

export function Avatar(props: Props) {
  return (
    <img
      className={
        props.disableOutline
          ? styles.avatar
          : `${styles.avatar} ${styles.avOutline}`
      }
      src={props.src}
    />
  );
}
