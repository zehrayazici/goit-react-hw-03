import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'

export default function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return <p className={styles.empty}>No contacts found.</p>
  }

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </ul>
  )
}
