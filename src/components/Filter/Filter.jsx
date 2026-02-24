import styles from './Filter.module.css'

export default function Filter({ value, onChange }) {
  return (
    <div className={styles.wrapper}>
      {}
      <input
        type="text"
        id="filter-search-input"
        name="search"
        value={value}
        onChange={onChange}
        autoComplete="off"
        placeholder="search.."
        className={styles.input}
        aria-label="Search filter" 
      />
    </div>
  )
}