import css from '../Statistics/Statistics.module.css';

export default function Notification({ message }) {
  return <>{message && <p className={css.text}>{message}</p>}</>;
}
