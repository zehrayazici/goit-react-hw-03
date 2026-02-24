import styles from './Filter.module.css'

export default function Filter({ value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        name="search"
        placeholder="search.."
        className={styles.input}
      />
    </div>
  )
}
