import styles from "../../style/movie/movies.module.css";

export default async function movieTotal({ img, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.con1}>
        <img src={img} />
        <p>{title}</p>
      </div>
    </div>
  );
}
