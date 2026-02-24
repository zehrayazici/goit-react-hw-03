import styles from './Contact.module.css'

export default function Contact({ name, number, onDelete }) {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.name}>👤 {name}</span>
        <span className={styles.number}>☎︎  {number}</span>
      </div>
      <button
        type="button"
        onClick={onDelete}
        className={styles.deleteBtn}
        aria-label={`${name} contact delete button`}
      >
        Delete
      </button>
    </li>
  )
}
